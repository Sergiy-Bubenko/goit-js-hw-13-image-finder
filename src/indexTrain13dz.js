import './sass/main.scss';
import menuTemplate from './templates/x.hbs';

const BASE_URL = 'http://localhost:3210'

export default { fetchBooks }
// get запросы
function fetchBooks() {
  return fetch(`${BASE_URL}/books`)
    .then(resize => resize.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`)
    .then(resize => resize.json());
}
// fetchBooks()
// fetchBookById(7)

// post запрос

const newBook = {
      "title": "Книжная книга",
      "author": "Писательский писатель",
      "genres": [
        "страннистика"
      ],
      "rating":6.66
}


function addBook(book) {
  const optionsPost = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  }

  return fetch(`${BASE_URL}/books`, optionsPost).then(res => res.json()).then(console.log)
}
// addBook({
//   title: 'Абра-кадабра',
//   author: 'др.Стрендж',
//   genres: ['магия'],
//   rating: 100
// }).then(renderBook)

// addBook(newBook).then(renderBook)

// function renderBook(book) {
//   console.log('Отрисовка поста');
//   console.log(book);
// }

// PATCH запрос



function updateBookById(update, bookId ) {
  const optionsPatch = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update)
  }
  
  return fetch(`${BASE_URL}/books/${bookId}`, optionsPatch).then(res => res.json()).then(console.log)
}

// updateBookById({ title: 'Происходит замена названия книги' }, 8)
// updateBookById({genres: ['horror']}, 8)


// DELETE запрос

function remodeBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`
  const optionsDelete = {
    method: 'DELETE',
  }


  return fetch(url, optionsDelete).then(res => res.json()).then(console.log)
}

// remodeBook(8).catch







// Отлавливание ошибок!!!

try {
  console.log("Внутри try до myVar");
  
  myVar

  console.log("Внутри try после myVar");
} catch (error) {
  console.dir(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

console.log('После try...catch');



function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎'
  }

  return Promise.resolve(fruits[name])
}

async function aMakeSmoothie() {
  const apple = await getFruit('apple')
  console.log(apple);
}

aMakeSmoothie()

// getFruit('apple').then(console.log)


console.time('abc')
console.log(DataView);
console.timeEnd('abc')


// import fetchBooks from './indexTrain13dz.js'

// статус загрузки:
// let loader = false;

// function getData() {
//   loader = true;
//   fetch('http://...../items').then('...').finally(() => loader = false)
// }

// в гугле посмотреть npm spener



// кнопка запроса :
// function submitHandler(e) {
//   e.preventDefault(); // - останавливает перезагрузку страницы при отправке формы (нужно если есть форма )
//   fetch('http//...', {
//     method: 'POST',
//     body: JSON.stringify({text: value})
//   })
// }


// отрисовка в HTML :
// .then(data => refs.ul.insertAdjacentHTML("beforeend", createLi(data)))

// const createLi = (data) => `<li>${data}</li>`


// для запуска функции при открытии стканицы нужно использовать конструкцыю:
// window.addEventLictener("DOMContentLoaded", getTasks)
// function() {
//   логика которую нужно запустить при откритии страницы ресурса
// }









// async function addBook(book) {
//     const optionsPost = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   }

//   const response = await fetch(`${BASE_URL}/books`, optionsPost)

//   return response.json()
// }

// async function fetchBooks() {
//   const response = await fetch(`${BASE_URL}/books`)
//   return response.json()
    
// }

// async function fetchBookById(bookId) {
//   const response = fetch(`${BASE_URL}/books/${bookId}`)
//    return response.json();
// }



// async function updateBookById(update, bookId ) {
//   const optionsPatch = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update)
//   }
//   const response = fetch(`${BASE_URL}/books/${bookId}`, optionsPatch)
//   return response.json()
// }


// async function remodeBook(bookId) {
//   const url = `${BASE_URL}/books/${bookId}`
//   const optionsDelete = {
//     method: 'DELETE',
//   }

//   const response = fetch(url, optionsDelete)

//   return response.json()
// }