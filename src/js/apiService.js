// Есть файл apiService.js с дефолтным экспортом объекта отвечающего за логику HTTP-запросов к API

function queryByValue(searchValue, pageNumber) {
  return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=4&key=23246580-47279d47050c78840bfc8f048`)
    .then(response => response.json())
}

export default { queryByValue }