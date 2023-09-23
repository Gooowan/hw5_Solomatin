// // Fetch all books from the API when the page loads
// function fetchBooks() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {
//             myBookshelf.books = []; // Clear the existing bookshelf
//
//             // Convert fetched data to Book objects and add to the bookshelf
//             data.forEach(item => {
//                 const book = new Book(item.title, "Unknown Author", 200, false, false);
//                 myBookshelf.addBook(book);
//             });
//         })
//         .catch(error => {
//             console.error('Error fetching books:', error);
//         });
// }
//
// Fetch books on initial page load
// fetchBooks();