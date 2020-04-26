let myLibrary = [];


function addToLibrary(title, author, isRead){
    let aBook = new Book(title, author, isRead)
    myLibrary.push(aBook);
}
class Book {
    constructor(title, author, isRead){
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }
    getTitle(){
        return this.title;
    }
    getAuthor(){
        return this.author;
    }
    readOrNot(){
        return this.isRead;
    }
  }

const container = document.querySelector('#libraryView');

function refreshLibrary(){
    for (let i = 0; i < myLibrary.length; i++){

        const aBook = document.createElement('div');
        aBook.classList.add('aBook');

        const bookTitle = document.createElement('div');
        bookTitle.innerHTML += myLibrary[i].title;

        const bookAuthor = document.createElement('div');
        bookAuthor.innerHTML += myLibrary[i].author;

        const bookRead = document.createElement('div');
        if(myLibrary[i].isRead){
            bookRead.innerHTML += "Read";
        }

        aBook.appendChild(bookTitle);
        aBook.appendChild(bookAuthor);
        aBook.appendChild(bookRead);
        container.appendChild(aBook);
    }

}

function addBook(){
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let hasRead = document.getElementById("readInput").value;
    addToLibrary(title, author, hasRead);
    refreshLibrary();
}

addToLibrary("hello", "world", true);
console.log(myLibrary[0].getTitle());
console.log(myLibrary[0].getAuthor());
refreshLibrary();