var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "BooksController",
      templateUrl: "views/login.html"
    })
    .when("/student", {
      controller: "BooksController",
      templateUrl: "views/student/books.html"
    })
    .when("/student/books", {
      controller: "BooksController",
      templateUrl: "views/student/books.html"
    })
    .when("/student/books/details/:id", {
      controller: "BooksController",
      templateUrl: "views/student/book_details.html"
    })
    .when("/student/books/add", {
      controller: "BooksController",
      templateUrl: "views/student/add_book.html"
    })
    .when("/student/books/edit/:id", {
      controller: "BooksController",
      templateUrl: "views/student/edit_book.html"
    })
    .when("/admin", {
      controller: "BooksController",
      templateUrl: "views/books.html"
    })
    .when("/admin/books", {
      controller: "BooksController",
      templateUrl: "views/admin/books.html"
    })
    .when("/admin/books/details/:id", {
      controller: "BooksController",
      templateUrl: "views/admin/book_details.html"
    })
    .when("/admin/books/add", {
      controller: "BooksController",
      templateUrl: "views/admin/add_book.html"
    })
    .when("/admin/books/edit/:id", {
      controller: "BooksController",
      templateUrl: "views/admin/edit_book.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});
