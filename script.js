const showButton = document.querySelector(".show-button");
const exitButton = document.querySelector(".close-button");
const addButton = document.querySelector(".submit-button");
const overlayDiv = document.querySelector(".overlay");
const formDiv = document.querySelector(".form-popup");

showButton.addEventListener("click", () => {
  formDiv.classList.add("active");
  overlayDiv.classList.add("active");
});

exitButton.addEventListener("click", () => {
  formDiv.classList.remove("active");
  overlayDiv.classList.remove("active");
});
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {}
