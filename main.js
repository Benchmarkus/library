const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead)

    myLibrary.push(newBook);
}

function drawLibrary() {
    // clear table (div container)
    container.replaceChildren();

    for (let book of myLibrary) {
        // div class=row
        const newRow = document.createElement("div");
        newRow.setAttribute("class", "row");

        // p title
        const newTitle = document.createElement("p");
        newTitle.textContent = book.title;
        
        // p author
        const newAuthor = document.createElement("p");
        newAuthor.textContent = book.author;
        
        // p pages
        const newPages = document.createElement("p");
        newPages.textContent = book.pages;
        
        // p read
        const newRead = document.createElement("p");
        newRead.textContent = book.isRead;
        
        // newChangeRead button
        const newChangeRead = document.createElement("button");
        newChangeRead.setAttribute("type", "button");
        newChangeRead.setAttribute("id", book.id);
        newChangeRead.textContent = "Change Read";
        
        // newChangeRead button
        const newDeleteButton = document.createElement("button");
        newDeleteButton.setAttribute("type", "button");
        newDeleteButton.setAttribute("id", book.id);
        newDeleteButton.textContent = "Delete";

        // append <p>s and <button>s to row <div>
        newRow.appendChild(newTitle);
        newRow.appendChild(newAuthor);
        newRow.appendChild(newPages);
        newRow.appendChild(newRead);
        newRow.appendChild(newChangeRead);
        newRow.appendChild(newDeleteButton);

        // append div row to div class="container"
        container.appendChild(newRow);

    }
}

// buttons
const addButton = document.querySelector(".insert-a-book");
const cancelButton = document.querySelector(".cancel-button");
const confirmButton = document.querySelector(".confirm-button");

// other elements
const dialog = document.querySelector(".insert-dialog");
const form = document.querySelector("#form");
const container = document.querySelector(".container");

// Add a Book button
addButton.addEventListener("click", () => {
    dialog.showModal();
});

// form Cancel button
cancelButton.addEventListener("click", () => {
    dialog.close();
});

// form submit
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const inputTitle = document.querySelector("#title");
    const inputAuthor = document.querySelector("#author");
    const inputPages = document.querySelector("#pages");
    const inputIsRead = document.querySelector("input[name='read']:checked");
    console.log(inputAuthor.value);
    console.log(inputPages.value);
    console.log(inputTitle.value);
    console.log(inputIsRead.value);

    addBookToLibrary(inputTitle.value, inputAuthor.value, inputPages.value, inputIsRead.value);

    drawLibrary();

    dialog.close();


});