'use strict';
import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import debounce from 'lodash.debounce';
import imageCardHBS from './templates/imageCard.hbs';
import API from './js/apiService';

const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.btn-loadMore'),
  hiddenElement: document.querySelector('.box')
};
const btnLM = refs.loadMore;

let searchValue = '';
let pageNumber = 1;

refs.form.addEventListener('input', debounce(getData, 500));
btnLM.addEventListener('click', onLoadMore);
btnLM.addEventListener('click', debounce(onScroll, 750));

function getData(e) {
  e.preventDefault();

  pageNumber = 1;
  refs.gallery.innerHTML = '';
  btnLM.disabled = true;
  btnLM.textContent = 'Loading...';
  searchValue = refs.form.firstElementChild.value.trim();
  getAndRender(searchValue, pageNumber);
};
function getAndRender(searchValue, pageNumber) {
  API.queryByValue(searchValue, pageNumber)
  .then(arr => {
    if (arr.total === 0) {
      btnLM.hidden = true;
      return error({
        text: 'No results were found for this request. Change your request!'
      })
    }
    renderData(arr);
  })
  .catch(err => {
       console.error(err.message)
      });
    };
    
function renderData(data) {
  refs.gallery.insertAdjacentHTML("beforeend", imageCardHBS(data));

  if (data.total / 12 <= pageNumber) {
    btnLM.textContent = 'No more pictures!'
      btnLM.hidden = false;
      btnLM.disabled = true;
      
      return
    };
    
    btnLM.disabled = false;
  btnLM.hidden = false;
  btnLM.textContent = 'Load more';
}

function onLoadMore() {
  pageNumber += 1;
  btnLM.disabled = true;
  btnLM.textContent = 'Loading...';
  getAndRender(searchValue, pageNumber)
};

function onScroll() {
  refs.hiddenElement.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
