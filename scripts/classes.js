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


let bookInstance1 = new Book("LalaLend", "Brown, Tim del Ray", 200, false, false);
let bookInstance2 = new Book("LalaLend2", "Brown1, Tim del Ray1", 250, false, false);
console.log(bookInstance1);

// bookInstance1.markAsRead();
// console.log(bookInstance1.isRead); // Should be true
//
// bookInstance1.toggleFavorite();
// console.log(bookInstance1.isFavorite); // Should be true
//
// bookInstance1.toggleFavorite();
// console.log(bookInstance1.isFavorite); // Should be false

// Create an instance of the Bookshelf class
const myBookshelf = new Bookshelf();

// Add the book instances to the bookshelf
myBookshelf.addBook(bookInstance1);
myBookshelf.addBook(bookInstance2);

console.log(myBookshelf.books);