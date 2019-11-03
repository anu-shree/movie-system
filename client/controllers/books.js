var myApp = angular.module("myApp");

myApp.controller("MoviesController", [
  "$scope",
  "$http",
  "$location",
  "$routeParams",
  function($scope, $http, $location, $routeParams) {
    console.log("MoviesController loaded...");

    $scope.getReviews = function() {
      $http.get("/student/movies").success(function(response) {
        $scope.books = response;
      });
    };

    $scope.getReviews = function() {
      $http.get("/admin/movies").success(function(response) {
        $scope.books = response;
      });
    };

    $scope.getReview = function() {
      var id = $routeParams.id;
      $http.get("/student/movies/" + id).success(function(response) {
        $scope.book = response;
      });
    };

    $scope.getReview = function() {
      var id = $routeParams.id;
      $http.get("/admin/movies/" + id).success(function(response) {
        $scope.book = response;
      });
    };

    $scope.addReviewA = function() {
      console.log($scope.book);
      $http.post("/admin/movies/", $scope.book).success(function(response) {
        window.location.href = "#/admin/movies";
      });
    };

    $scope.addReview = function() {
      console.log($scope.book);
      $http.post("/student/movies/", $scope.book).success(function(response) {
        window.location.href = "#/student/movies";
      });
    };

    $scope.updateReview = function() {
      var id = $routeParams.id;
      $http
        .put("/student/movies/" + id, $scope.book)
        .success(function(response) {
          window.location.href = "#/admin/movies";
        });
    };

    $scope.updateReview = function() {
      var id = $routeParams.id;
      $http.put("/admin/movies/" + id, $scope.book).success(function(response) {
        window.location.href = "#/admin/movies";
      });
    };

    $scope.removeReview = function(id) {
      $http.delete("/student/movies/" + id).success(function(response) {
        window.location.href = "#/student/movies";
      });
    };

    $scope.removeReview = function(id) {
      $http.delete("/admin/movies/" + id).success(function(response) {
        window.location.href = "#/admin/movies";
      });
    };
  }
]);
