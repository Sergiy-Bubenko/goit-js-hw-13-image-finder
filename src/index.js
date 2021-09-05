// 'use strict';
import './sass/main.scss';
import debounce from 'lodash.debounce'
import imageCard from './templates/imageCard.hbs';
import API from './js/apiService';

const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.btn-loadMore')
}

let searchValue = '';
let pageNumber = 1;

refs.form.addEventListener('input', debounce(getData, 500))
refs.loadMore.addEventListener('click', onLoadMore)

function getData(e) {
  e.preventDefault()

  refs.gallery.innerHTML = '';
  searchValue = refs.form.firstElementChild.value;

  getAndRender(searchValue, pageNumber)
}

function getAndRender(searchValue, pageNumber) {
  API.queryByValue(searchValue, pageNumber)
  .then(arr => renderData(arr))
    .catch(err => console.log(err.message))
//     .finally(() => {
//       const element = document.getElementById('.btn-loadMore');
//         element.scrollIntoView({
//           behavior: 'smooth',
//           block: 'end',
// });
//       loader = false
//     })
}

function renderData(data) {
  refs.gallery.insertAdjacentHTML("beforeend", imageCard(data))
}

function onLoadMore(e) {
  console.log(e);
  pageNumber += 1

  getAndRender(searchValue, pageNumber)

}



