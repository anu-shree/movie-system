const mongoose = require("mongoose");

// Movie Schema
const movieSchema = mongoose.Schema({
  admn: {
    type: String,
    required: true
  },
  movie: {
    type: String,
    required: true
  },
  description: {
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

const Review = (module.exports = mongoose.model("Review", movieSchema));

// Get Reviews
module.exports.getReviews = (callback, limit) => {
  Review.find(callback).limit(limit);
};

// Get Reviews
module.exports.getReviewById = (id, callback) => {
  Review.findById(id, callback);
};

// Add Reviews
module.exports.addReview = (review, callback) => {
  Review.create(review, callback);
};

module.exports.addReviewA = (review, callback) => {
  Review.create(review, callback);
};

// Update Reviews
module.exports.updateReview = (id, review, options, callback) => {
  var query = { _id: id };
  var update = {
    admn: review.admn,
    movie: review.movie,
    review: review.description,
    rating: review.rating,
    email: review.email,
    approved: review.approved
  };
  Review.findOneAndUpdate(query, update, options, callback);
};

// Delete Reviews
module.exports.removeReview = (id, callback) => {
  var query = { _id: id };
  Review.remove(query, callback);
};
