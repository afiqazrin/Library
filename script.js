const showButton = document.querySelector(".show-button");
const exitButton = document.querySelector(".close-button");
const addButton = document.querySelector(".submit-button");
const overlayDiv = document.querySelector(".overlay");
const formDiv = document.querySelector(".form-popup");
const cardContainer = document.querySelector(".card-container");
const form = document.getElementById("form");

let myLibrary = [];

showButton.addEventListener("click", () => {
  formDiv.classList.add("active");
  overlayDiv.classList.add("active");
});

exitButton.addEventListener("click", () => {
  formDiv.classList.remove("active");
  overlayDiv.classList.remove("active");
});

form.addEventListener("submit", function (event) {
  let bookName = document.getElementById("book_name").value;
  let authorName = document.getElementById("author_name").value;
  let numberOfPages = document.getElementById("number_pages").value;
  let readOrNot = isChecked();
  event.preventDefault();
  addBookToLibrary(bookName, authorName, numberOfPages, readOrNot);
  addCard();
});
function isChecked() {
  if (document.getElementById("read").checked) {
    console.log("true");
    return "Read";
  } else {
    console.log("false");
    return "Not Read";
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bname, aname, npages, readornot) {
  var book = new Book();
  book.title = bname;
  book.author = aname;
  book.pages = npages;
  book.read = readornot;
  myLibrary.push(book);
}

function addCard() {
  let cardDiv = document.createElement("div");
  let bookNameDiv = document.createElement("div");
  let authorNameDiv = document.createElement("div");
  let numberOfPagesDiv = document.createElement("div");
  let readOrNotButton = document.createElement("button");
  let removeButton = document.createElement("button");
  cardDiv.setAttribute("class", "card");
  bookNameDiv.setAttribute("class", "book-name");
  authorNameDiv.setAttribute("class", "author-name");
  numberOfPagesDiv.setAttribute("class", "number-of-pages");
  removeButton.setAttribute("class", "remove-button");
  removeButton.innerHTML =
    '<img src="assets/icons/delete.svg" alt="trashcan" height=50/>';
  cardContainer.append(cardDiv);
  cardDiv.append(bookNameDiv);
  cardDiv.append(authorNameDiv);
  cardDiv.append(numberOfPagesDiv);
  cardDiv.append(readOrNotButton);
  cardDiv.append(removeButton);
  myLibrary.forEach(function (book, index) {
    bookNameDiv.textContent = book.title;
    authorNameDiv.textContent = book.author;
    numberOfPagesDiv.textContent = book.pages;
    readOrNotButton.textContent = book.read;
    readOrNotButton.dataset.updateReadStatus = index;
    if (readOrNotButton.textContent == "Read") {
      readOrNotButton.className = "";
      readOrNotButton.classList.add("read");
    }
    if (readOrNotButton.textContent == "Not Read") {
      readOrNotButton.className = "";
      readOrNotButton.classList.add("not-read");
    }
    removeButton.dataset.remove = index;

    removeButton.addEventListener("click", () => {
      myLibrary.splice(Number(removeButton.dataset.remove), 1);
      removeButton.parentElement.remove();
    });
  });
  readOrNotButton.addEventListener("click", (e) => {
    if (e.target.textContent == "Read") {
      e.target.className = "";
      e.target.classList.add("not-read");
      e.target.textContent = "Not Read";
      myLibrary[Number(e.target.getAttribute("data-update-read-status"))].read =
        "Not Read";
    } else if (e.target.textContent == "Not Read") {
      e.target.className = "";
      e.target.classList.add("read");
      e.target.textContent = "Read";
      myLibrary[Number(e.target.getAttribute("data-update-read-status"))].read =
        "Read";
    }
  });
  formDiv.classList.remove("active");
  overlayDiv.classList.remove("active");
  form.reset();
}
