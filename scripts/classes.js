class Book {
    constructor(title, authors, numberOfPages, isRead, isFavorite) {
        this.title = title;
        this.authors = authors;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
        this.isFavorite = isFavorite;
    }

    markAsReadToggle() {
        this.isRead = !this.isRead;
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

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
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

        library.forEach((book, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${book.title} by ${book.authors} (${book.isRead ? "Read" : "Unread"}) (${book.isFavorite ? "Favourite" : "Not Favourite"})`;

            const readButton = document.createElement("button");
            readButton.textContent = book.isRead ? "Mark as Unread" : "Mark as Read";
            readButton.addEventListener('click', () => {
                book.markAsReadToggle();
                this.displayUnreadBooks();
                this.displayLibrary();
            });

            const favoriteButton = document.createElement("button");
            favoriteButton.textContent = book.isFavorite ? "Remove from Favorites" : "Add to Favorites";
            favoriteButton.addEventListener('click', () => {
                book.toggleFavorite();
                this.displayUnreadBooks();
                this.displayLibrary();
            });

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove from Library";
            removeButton.addEventListener('click', () => {
                this.removeBook(book.title);
                this.displayUnreadBooks();
                this.displayLibrary();
            });

            listItem.appendChild(readButton);
            listItem.appendChild(favoriteButton);
            listItem.appendChild(removeButton);
            bookList.appendChild(listItem);
        });

        const favoriteCount = document.getElementById("favoriteCount");
        favoriteCount.textContent = `Number of favorite books: ${this.countFavoriteBooks()}`;

        const unreadCount = document.getElementById("unreadCount");
        unreadCount.textContent = `Number of unread books: ${this.countUnreadBooks()}`;
    }
}

const myBookshelf = new Bookshelf();

const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const authors = document.getElementById("authors").value;
    const pages = parseInt(document.getElementById("pages").value, 10);
    const isRead = document.getElementById("isRead").checked;
    const isFavorite = document.getElementById("isFavorite").checked;

    const newBook = new Book(title, authors, pages, isRead, isFavorite);

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
            myBookshelf.addBook(newBook);
        })
        .catch(error => {
            console.error('Error adding new book:', error);
        });

    document.getElementById("title").value = "";
    document.getElementById("authors").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("isRead").checked = false;
    document.getElementById("isFavorite").checked = false;
});
