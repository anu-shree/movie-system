var myApp = angular.module("myApp");

myApp.controller("BooksController", [
  "$scope",
  "$http",
  "$location",
  "$routeParams",
  function($scope, $http, $location, $routeParams) {
    console.log("BooksController loaded...");

    $scope.getBooks = function() {
      $http.get("/student/books").success(function(response) {
        $scope.books = response;
      });
    };

    $scope.getBooks = function() {
      $http.get("/admin/books").success(function(response) {
        $scope.books = response;
      });
    };

    $scope.getBook = function() {
      var id = $routeParams.id;
      $http.get("/student/books/" + id).success(function(response) {
        $scope.book = response;
      });
    };

    $scope.getBook = function() {
      var id = $routeParams.id;
      $http.get("/admin/books/" + id).success(function(response) {
        $scope.book = response;
      });
    };

    $scope.addBookA = function() {
      console.log($scope.book);
      $http.post("/admin/books/", $scope.book).success(function(response) {
        window.location.href = "#/admin/books";
      });
    };

    $scope.addBook = function() {
      console.log($scope.book);
      $http.post("/student/books/", $scope.book).success(function(response) {
        window.location.href = "#/student/books";
      });
    };

    $scope.updateBook = function() {
      var id = $routeParams.id;
      $http
        .put("/student/books/" + id, $scope.book)
        .success(function(response) {
          window.location.href = "#/admin/books";
        });
    };

    $scope.updateBook = function() {
      var id = $routeParams.id;
      $http.put("/admin/books/" + id, $scope.book).success(function(response) {
        window.location.href = "#/admin/books";
      });
    };

    $scope.removeBook = function(id) {
      $http.delete("/student/books/" + id).success(function(response) {
        window.location.href = "#/student/books";
      });
    };

    $scope.removeBook = function(id) {
      $http.delete("/admin/books/" + id).success(function(response) {
        window.location.href = "#/admin/books";
      });
    };
  }
]);
