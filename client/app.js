var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "MoviesController",
      templateUrl: "views/login.html"
    })
    .when("/student", {
      controller: "MoviesController",
      templateUrl: "views/student/books.html"
    })
    .when("/student/movies", {
      controller: "MoviesController",
      templateUrl: "views/student/books.html"
    })
    .when("/student/movies/details/:id", {
      controller: "MoviesController",
      templateUrl: "views/student/book_details.html"
    })
    .when("/student/movies/add", {
      controller: "MoviesController",
      templateUrl: "views/student/add_book.html"
    })
    .when("/student/movies/edit/:id", {
      controller: "MoviesController",
      templateUrl: "views/student/edit_book.html"
    })
    .when("/admin", {
      controller: "MoviesController",
      templateUrl: "views/books.html"
    })
    .when("/admin/movies", {
      controller: "MoviesController",
      templateUrl: "views/admin/books.html"
    })
    .when("/admin/movies/details/:id", {
      controller: "MoviesController",
      templateUrl: "views/admin/book_details.html"
    })
    .when("/admin/movies/add", {
      controller: "MoviesController",
      templateUrl: "views/admin/add_book.html"
    })
    .when("/admin/movies/edit/:id", {
      controller: "MoviesController",
      templateUrl: "views/admin/edit_book.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});
