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

app.get("/student", (req, res) => {
  res.send("Please use /api/books or /api/genres");
});

app.get("/api/student/books", (req, res) => {
  Book.getBooks((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.get("/api/student/books/:_id", (req, res) => {
  Book.getBookById(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.post("/api/student/books", (req, res) => {
  var book = req.body;
  Book.addBook(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.put("/api/student/books/:_id", (req, res) => {
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id, book, {}, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.delete("/api/student/books/:_id", (req, res) => {
  var id = req.params._id;
  Book.removeBook(id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.get("/admin", (req, res) => {
  res.send("Please use //books or /api/genres");
});

app.get("/api/admin/books", (req, res) => {
  Book.getBooks((err, books) => {
    if (err) {
      throw err;
    }
    res.json(books);
  });
});

app.get("/api/admin/books/:_id", (req, res) => {
  Book.getBookById(req.params._id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.post("/api/admin/books", (req, res) => {
  var book = req.body;
  Book.addBook(book, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.put("/api/admin/books/:_id", (req, res) => {
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id, book, {}, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.delete("/api/admin/books/:_id", (req, res) => {
  var id = req.params._id;
  Book.removeBook(id, (err, book) => {
    if (err) {
      throw err;
    }
    res.json(book);
  });
});

app.listen(3041);
console.log("Running on port 3040...");
