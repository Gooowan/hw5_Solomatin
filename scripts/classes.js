class Book{
    constructor(title, authors, numberOfPages, isRead, isFavorite) {
        this.title = title;
        this.authors = authors;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
        this.isFavorite = isFavorite;
    }
    markAsRead(){
        this.isRead = true;
    }
    toggleFavorite(){
        this.isFavorite = !this.isFavorite;
    }
}

class Bookshelf{
    constructor(books) {
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }

    removeBook(book){
        const indexToRemove = this.books.findIndex(book => (
            book.title === bookToRemove.title &&
            book.authors === bookToRemove.authors &&
            book.numberOfPages === bookToRemove.numberOfPages
        ));

        if (indexToRemove !== -1) {
            this.books.splice(indexToRemove, 1);
            console.log("Book removed from the bookshelf.");
        } else {
            console.log("Book not found in the bookshelf.");
        }
    }

    getUnreadBooks() {
        const unreadBooks = this.books.filter(book => !book.isRead);
        return unreadBooks;
    }

    getFavBooks(){
        const unreadBooks = this.books.filter(book => !book.isFavorite);
        return unreadBooks;
    }
}


// let bookInstance1 = new Book("LalaLend", "Brown, Tim del Ray", 200, false, false);
// let bookInstance2 = new Book("LalaLend2", "Brown1, Tim del Ray1", 250, false, false);
// console.log(bookInstance1);

// bookInstance1.markAsRead();
// console.log(bookInstance1.isRead); // Should be true
//
// bookInstance1.toggleFavorite();
// console.log(bookInstance1.isFavorite); // Should be true
//
// bookInstance1.toggleFavorite();
// console.log(bookInstance1.isFavorite); // Should be false

// Create an instance of the Bookshelf class
// const myBookshelf = new Bookshelf();
//
// // Add the book instances to the bookshelf
// myBookshelf.addBook(bookInstance1);
// myBookshelf.addBook(bookInstance2);
//
// console.log(myBookshelf.books);

// Sample data for testing
const book1 = new Book("Book 1", "Author 1", 200, false, false);
const book2 = new Book("Book 2", "Author 2", 250, true, true);
const book3 = new Book("Book 3", "Author 3", 300, false, true);

// Create a Bookshelf instance and add sample books
const myBookshelf = new Bookshelf();
myBookshelf.addBook(book1);
myBookshelf.addBook(book2);
myBookshelf.addBook(book3);

// Function to display unread books in the Discover section
function displayUnreadBooks() {
    const unreadBooks = myBookshelf.getUnreadBooks();
    const unreadBooksList = document.getElementById("unreadBooks");

    unreadBooksList.innerHTML = ""; // Clear previous list

    unreadBooks.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} by ${book.authors}`;
        unreadBooksList.appendChild(listItem);
    });
}

// Function to display the entire library in the My Library section
function displayLibrary() {
    const library = myBookshelf.books;
    const bookList = document.getElementById("bookList");

    bookList.innerHTML = ""; // Clear previous list

    library.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} by ${book.authors} (${book.isRead ? "Read" : "Unread"})`;
        bookList.appendChild(listItem);
    });
}

// Event listener for adding a new book
const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const authors = document.getElementById("authors").value;
    const pages = parseInt(document.getElementById("pages").value, 10);
    const isRead = document.getElementById("isRead").checked;
    const isFavorite = document.getElementById("isFavorite").checked;

    const newBook = new Book(title, authors, pages, isRead, isFavorite);
    myBookshelf.addBook(newBook);

    // Clear form fields
    document.getElementById("title").value = "";
    document.getElementById("authors").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isRead").checked = false;
    document.getElementById("isFavorite").checked = false;

    // Refresh the display
    displayUnreadBooks();
    displayLibrary();
});

// Initial display of unread books and library
displayUnreadBooks();
displayLibrary();