const mongoose = require("mongoose");

// Book Schema
const bookSchema = mongoose.Schema({
  admn: {
    type: String,
    required: true
  },
  movie: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  approved: {
    type: String,
    default: "Pending"
  }
});

const Book = (module.exports = mongoose.model("Book", bookSchema));

// Get Books
module.exports.getBooks = (callback, limit) => {
  Book.find(callback).limit(limit);
};

// Get Book
module.exports.getBookById = (id, callback) => {
  Book.findById(id, callback);
};

// Add Book
module.exports.addBook = (book, callback) => {
  Book.create(book, callback);
};

module.exports.addBookA = (book, callback) => {
  Book.create(book, callback);
};

// Update Book
module.exports.updateBook = (id, book, options, callback) => {
  var query = { _id: id };
  var update = {
    admn: book.admn,
    movie: book.movie,
    review: book.review,
    rating: book.rating,
    email: book.email,
    approved: book.approved
  };
  Book.findOneAndUpdate(query, update, options, callback);
};

// Delete Book
module.exports.removeBook = (id, callback) => {
  var query = { _id: id };
  Book.remove(query, callback);
};
