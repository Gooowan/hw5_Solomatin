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




// let bookInstance = new Book("LalaLend", "Brown, Tim del Ray", 200, false, false);
// console.log(bookInstance);
//
// bookInstance.markAsRead();
// console.log(bookInstance.isRead); // Should be true
//
// bookInstance.toggleFavorite();
// console.log(bookInstance.isFavorite); // Should be true
//
// bookInstance.toggleFavorite();
// console.log(bookInstance.isFavorite); // Should be false