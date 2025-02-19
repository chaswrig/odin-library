const myLibrary = [];

const container = document.querySelector('.container');

addBookToLibrary('Tolkien', 'The Hobbit', 456, true, 'Pretty good');
addBookToLibrary('Neal Stephenson', 'Snow Crash', 700, true, 'Inspired Metaverse');
displayLibrary();
displayLibrary();

function Book(author, title, pageCount, read, notes) {
    this.author = author;
    this.title = title;
    this.pageCount = pageCount;
    this.read = read;
    this.notes = notes;
}

function addBookToLibrary(author, title, pageCount, read, notes){
    book = new Book(author, title, pageCount, read, notes);
    myLibrary.push(book);
    console.log(book.title + " added");
}

function displayLibrary(){
    //Clear the display
    container.replaceChildren();
    
    //Display the entire library
    myLibrary.forEach( (book) => {
        const div = document.createElement('div');
        div.textContent = book.title;
        div.classList.toggle('card');
        container.appendChild(div);
    });
}