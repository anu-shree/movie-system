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
module.exports.getReviews = (callback, limit) => {
  Book.find(callback).limit(limit);
};

// Get Book
module.exports.getReviewById = (id, callback) => {
  Book.findById(id, callback);
};

// Add Book
module.exports.addReview = (book, callback) => {
  Book.create(book, callback);
};

module.exports.addReviewA = (book, callback) => {
  Book.create(book, callback);
};

// Update Book
module.exports.updateReview = (id, book, options, callback) => {
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
module.exports.removeReview = (id, callback) => {
  var query = { _id: id };
  Book.remove(query, callback);
};
