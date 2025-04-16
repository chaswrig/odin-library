const myLibrary = [];

const container = document.querySelector('.container');

//Data for project as this version does not have a backend solution.
addBookToLibrary('Neal Stephenson', 'Snow Crash', 700, true, 'Inspired Metaverse');
addBookToLibrary('William Gibson', 'Neuromancer', 500, true, "Inspired Matrix");
addBookToLibrary('William Gibson', 'The Peripheral', 500, false, "Yellow Cover");
addBookToLibrary('Mark Z. Danielewski', 'House of Leaves', 500, true, 'Creepy')
displayLibrary();

const dialog = document.querySelector("dialog");
const addBook = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");

addBook.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let author = document.getElementById("author").value;
    console.log("Book title: " + author);
    let title = document.getElementById("title").value;
    let pageCount = document.getElementById("pages").value;
    let read = false;
    let notes = document.querySelector("textarea").value;
    addBookToLibrary(author, title, pageCount, read, notes);
    displayLibrary();
    dialog.close();
});

function Book(author, title, pageCount, read, notes) {
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.read = read;
    this.notes = notes;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(author, title, pageCount, read, notes){
    book = new Book(author, title, pageCount, read, notes);
    myLibrary.push(book);
    console.log(book.title + " added as id " + book.id);
}

//TODO: Add button that will change book's read status.
function changeReadStatus(id){
    console.log("Read " + id);
}
//TODO: Add button that will remove book from library.
function removeBook(id){
    const index = myLibrary.indexOf(id);
    myLibrary.splice(index, 1);
    console.log("Removed " + id);
}

function displayLibrary(){
    //Clear the display
    container.replaceChildren();
    
    //Display the entire library
    myLibrary.forEach( (book) => {
        const card = document.createElement('div');
        card.textContent = book.title;
        if (card.textContent.includes('House')){
            card.style.color = "blue";
        }
        card.classList.toggle('card');
        if(book.read === false) {
            card.style.backgroundColor = "darkred";
        }

        card.id = book.id;

        const readButton = document.createElement("button");
        readButton.textContent = "Finished";
        readButton.addEventListener("click", () => {
            changeReadStatus(card.id);
        })
        card.appendChild(readButton);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            removeBook(card.id);
            displayLibrary();
        })
        card.appendChild(removeButton);
        container.appendChild(card);
    });
}