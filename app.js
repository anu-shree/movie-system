const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());

Book = require("./models/book");

// Connect to Mongoose
mongoose.connect("mongodb://localhost/bookstore");
var db = mongoose.connection;

app.get("/", (req, res) => {
  res.send("Please use /api/movies ");
});

app.get("/student", (req, res) => {
  Book.getReviews((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.get("/student/movies", (req, res) => {
  Book.getReviews((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.get("/student/movies/:_id", (req, res) => {
  Book.getReviewById(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.post("/student/movies", (req, res) => {
  var book = req.body;
  Book.addReview(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.put("/student/movies/:_id", (req, res) => {
  var id = req.params._id;
  var book = req.body;
  Book.updateReview(id, book, {}, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.delete("/student/movies/:_id", (req, res) => {
  var id = req.params._id;
  Book.removeReview(id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.get("/admin", (req, res) => {
  Book.getReviews((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.get("/admin/movies", (req, res) => {
  Book.getReviews((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.get("/admin/movies/:_id", (req, res) => {
  Book.getReviewById(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.post("/admin/movies", (req, res) => {
  var book = req.body;
  Book.addReviewA(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.put("/admin/movies/:_id", (req, res) => {
  var id = req.params._id;
  var book = req.body;
  Book.updateReview(id, book, {}, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.delete("/admin/movies/:_id", (req, res) => {
  var id = req.params._id;
  Book.removeReview(id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.listen(3041);
console.log("Running on port 3041...");
