import axios from "axios";



export default {
  // Search books
  searchBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title + "&fields=items(id,volumeInfo(title,authors,description,imageLinks/thumbnail,infoLink))")
    //+ "&fields=items(volumeInfo)"
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books/");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(savedBooks) {
    return axios.post("/api/books", savedBooks);
  }
};
