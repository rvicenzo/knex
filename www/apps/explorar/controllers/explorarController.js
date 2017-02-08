angular.module('starter.explore', [])

.controller('explorarController', explorarController);

function explorarController($scope){
  alert('teste');
  $scope.txt = "bunda";
}
