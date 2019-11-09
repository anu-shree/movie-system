const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

Review = require("./models/review");

// Connect to Mongoose
mongoose.connect("mongodb://localhost/bookstore");
var db = mongoose.connection;

app.get("/", (req, res) => {
  res.send("Please use /api/movies ");
});

app.get("/student", (req, res) => {
  Review.getReviews((err, reviews) => {
    if (err) {
      throw err;
    }
    res.json(reviews);
  });
});

app.get("/student/movies", (req, res) => {
  Review.getReviews((err, reviews) => {
    if (err) {
      throw err;
    }
    res.json(reviews);
  });
});

app.get("/student/movies/:_id", (req, res) => {
  Review.getReviewById(req.params._id, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.post("/student/movies", (req, res) => {
  var review = req.body;
  Review.addReview(review, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.put("/student/movies/:_id", (req, res) => {
  var id = req.params._id;
  var review = req.body;
  Review.updateReview(id, review, {}, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.delete("/student/movies/:_id", (req, res) => {
  var id = req.params._id;
  Review.removeReview(id, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.get("/admin", (req, res) => {
  Review.getReviews((err, reviews) => {
    if (err) {
      throw err;
    }
    res.json(reviews);
  });
});

app.get("/admin/movies", (req, res) => {
  Review.getReviews((err, reviews) => {
    if (err) {
      throw err;
    }
    res.json(reviews);
  });
});

app.get("/admin/movies/:_id", (req, res) => {
  Review.getReviewById(req.params._id, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.post("/admin/movies", (req, res) => {
  var review = req.body;
  Review.addReviewA(review, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.put("/admin/movies/:_id", (req, res) => {
  var id = req.params._id;
  var review = req.body;
  Review.updateReview(id, review, {}, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.delete("/admin/movies/:_id", (req, res) => {
  var id = req.params._id;
  Review.removeReview(id, (err, review) => {
    if (err) {
      throw err;
    }
    res.json(review);
  });
});

app.listen(3042);
console.log("Running on port 3042...");
