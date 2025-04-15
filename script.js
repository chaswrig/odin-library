const myLibrary = [];

const container = document.querySelector('.container');

//Display data for project as this version does not have a backend solution.
addBookToLibrary('Neal Stephenson', 'Snow Crash', 700, true, 'Inspired Metaverse');
addBookToLibrary('William Gibson', 'Neuromancer', 500, true, "Inspired Matrix");
addBookToLibrary('William Gibson', 'The Peripheral', 500, false, "Yellow Cover");
addBookToLibrary('Mark Z. Danielewski', 'House of Leaves', 500, true, 'Creepy')
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
        if (div.textContent.includes('House')){
            div.style.color = "blue"
        }
        div.classList.toggle('card');
        if(book.read === false) {
            div.style.backgroundColor = "darkred";
        }
        container.appendChild(div);
    });
}