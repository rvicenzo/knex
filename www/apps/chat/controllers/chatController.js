angular.module('starter.chat', [])

.controller('chatController', chatController);

function chatController($scope){
  getInfoChat();
  function getInfoChat(){
    $scope.nameUser = "Jon Snow";
    $scope.imgProfileChat = 'img/jon.jpeg';
    $scope.imgProfileChat = {
      "background": 'url('+$scope.imgProfileChat+') center no-repeat',
      "background-size": 'cover'
    }
  }
}
