// Class definitions
class Book {
    constructor(title, authors, numberOfPages, isRead, isFavorite) {
        this.title = title;
        this.authors = authors;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
        this.isFavorite = isFavorite;
    }

    markAsRead() {
        this.isRead = true;
    }

    toggleFavorite() {
        this.isFavorite = !this.isFavorite;
    }
}

class Bookshelf {
    constructor(books = []) {
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
        this.displayUnreadBooks();
        this.displayLibrary();
    }

    getUnreadBooks() {
        return this.books.filter(book => !book.isRead);
    }

    getFavoriteBooks() {
        return this.books.filter(book => book.isFavorite);
    }

    countFavoriteBooks() {
        return this.getFavoriteBooks().length;
    }

    countUnreadBooks() {
        return this.getUnreadBooks().length;
    }

    displayUnreadBooks() {
        const unreadBooks = this.getUnreadBooks();
        const unreadBooksList = document.getElementById("unreadBooks");

        unreadBooksList.innerHTML = ""; // Clear previous list

        unreadBooks.forEach(book => {
            const listItem = document.createElement("li");
            listItem.textContent = `${book.title} by ${book.authors}`;
            unreadBooksList.appendChild(listItem);
        });
    }

    displayLibrary() {
        const library = this.books;
        const bookList = document.getElementById("bookList");

        bookList.innerHTML = ""; // Clear previous list

        library.forEach(book => {
            const listItem = document.createElement("li");
            listItem.textContent = `${book.title} by ${book.authors} (${book.isRead ? "Read" : "Unread"})`;
            bookList.appendChild(listItem);
        });

        // Display count of favorite and unread books
        const favoriteCount = document.getElementById("favoriteCount");
        favoriteCount.textContent = `Number of favorite books: ${this.countFavoriteBooks()}`;

        const unreadCount = document.getElementById("unreadCount");
        unreadCount.textContent = `Number of unread books: ${this.countUnreadBooks()}`;
    }

}

// Create a Bookshelf instance
const myBookshelf = new Bookshelf();

// Event listener for adding a new book
const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const authors = document.getElementById("authors").value;
    const pages = parseInt(document.getElementById("pages").value, 10);
    const isRead = document.getElementById("isRead").checked;
    const isFavorite = document.getElementById("isFavorite").checked;

    const newBook = new Book(title, authors, pages, isRead, isFavorite);

    // Send the new book data to the API
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: newBook.title,
            body: newBook.authors,  // Using "body" for authors due to the mock API structure
            userId: 1  // Placeholder for the mock API
        })
    })
        .then(response => response.json())
        .then(data => {
            myBookshelf.addBook(newBook); // Add the new book to the bookshelf
        })
        .catch(error => {
            console.error('Error adding new book:', error);
        });

    // Clear form fields
    document.getElementById("title").value = "";
    document.getElementById("authors").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isRead").checked = false;
    document.getElementById("isFavorite").checked = false;
});


