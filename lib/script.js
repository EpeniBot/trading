// Add your code here
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.loadData = function(){
      $http.get("https://script.google.com/macros/s/AKfycbwvVxWd7dz19VrFFrQPM2ZCF6eVNm15-jqBAwilVFf3wiRmrOGm/exec")
      .then(function(response) {
          $scope.signal = angular.fromJson(response.data);
      });
    }
	
	$scope.loadData();
   
});
