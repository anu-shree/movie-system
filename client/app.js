var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "MoviesController",
      templateUrl: "views/login.html"
    })
    .when("/student", {
      controller: "MoviesController",
      templateUrl: "views/student/reviews.html"
    })
    .when("/student/movies", {
      controller: "MoviesController",
      templateUrl: "views/student/reviews.html"
    })
    .when("/student/movies/details/:id", {
      controller: "MoviesController",
      templateUrl: "views/student/review_details.html"
    })
    .when("/student/movies/add", {
      controller: "MoviesController",
      templateUrl: "views/student/add_review.html"
    })
    .when("/student/movies/edit/:id", {
      controller: "MoviesController",
      templateUrl: "views/student/edit_review.html"
    })
    .when("/admin", {
      controller: "MoviesController",
      templateUrl: "views/reviews.html"
    })
    .when("/admin/movies", {
      controller: "MoviesController",
      templateUrl: "views/admin/reviews.html"
    })
    .when("/admin/movies/details/:id", {
      controller: "MoviesController",
      templateUrl: "views/admin/review_details.html"
    })
    .when("/admin/movies/add", {
      controller: "MoviesController",
      templateUrl: "views/admin/add_review.html"
    })
    .when("/admin/movies/edit/:id", {
      controller: "MoviesController",
      templateUrl: "views/admin/edit_review.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});
