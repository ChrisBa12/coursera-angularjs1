(function ()  {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.food = "";
    $scope.foodmessage = "";

    $scope.checkiftoomuch = function () {
      var foodarray = $scope.food.split(',');
      var arraylength = foodarray.length;

      if ($scope.food == "") {
        $scope.foodmessage = "Please enter data first!";
      }else if (arraylength > 0 && arraylength < 4) {
        $scope.foodmessage = "Enjoy";
      }else {
        $scope.foodmessage = "Too much!";
      };
    };

  }
})();
