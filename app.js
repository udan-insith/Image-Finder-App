const accessKey = "w2F1qbKJsX-tex7FwdrOwOjC4epnttcrUkKEAmKZRYg"
const formEl = document.querySelector("form")
const searchInputEl = document.getElementById("search-input")
const searchResultsEl = document.querySelector(".search-results")
const showMoreButton = document.getElementById("show-more-button")

let inputData = ""
let page = 1

function searchImages() {
    inputData = searchInputEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    console.log(url)
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    searchImages()
})