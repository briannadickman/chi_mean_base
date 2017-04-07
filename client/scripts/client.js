var myApp = angular.module('myApp', []);

//   CONTROLLERS
myApp.controller('InputController', ['$scope', 'TheaterService', function($scope, TheaterService){
    $scope.addMovies = TheaterService;
    $scope.newMovie = {
      title : '',
      description : '',
      director : '',
      runTime : ''
    };
}]);

myApp.controller('DisplayController', ['$scope', 'TheaterService', function($scope, TheaterService){
    console.log(TheaterService);
    $scope.displayMovies = TheaterService;
}]);



//   FACTORY
myApp.factory('TheaterService', [function(){

var collection = [];

  var database = {
    collection: collection,
    newMovie : function(newMovie){
      database.collection.push({
        title : newMovie.title,
        description : newMovie.description,
        director : newMovie.director,
        runTime : newMovie.runTime
      });
    }
  };

  database.collection = [
  {title: "Titanic",
  description: "Totally room for two.",
  director: "James Cameron",
  runTime: "Forever"},

  {title: "Reservoir Dogs",
  description: "Probably Tarantino's debut film",
  director: "Quentin Tarantino",
  runTime: "1h39m"}
];

return database;

}]);
