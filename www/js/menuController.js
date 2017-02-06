angular.module('starter.menu', [])

.controller('menuSliderController', menuSliderController);

function menuSliderController($scope){

  
  $scope.sizeScreen = (((window.innerWidth > 0) ? window.innerWidth : screen.width));
  console.log('sizeScreen: '+ $scope.sizeScreen);
  if($scope.sizeScreen>400 &&  $scope.sizeScreen<700){
  	  $scope.menuWidth = (((window.innerWidth > 0) ? window.innerWidth : screen.width))/1.1;
  }
  else if($scope.sizeScreen<=400){
  	  $scope.menuWidth = (((window.innerWidth > 0) ? window.innerWidth : screen.width));
  }
  else{
  	$scope.menuWidth = (((window.innerWidth > 0) ? window.innerWidth : screen.width))/1.5;
  }

  getMetrics();
  getInfo();

  function getInfo(){
  	$scope.imgProfile = 'img/jon.jpeg';
  	$scope.nameProfile = 'Jon Snow';
  	$scope.scoreProfile = '700';
  	$scope.general = 1;
  	$scope.skills = 55;
  	$scope.progress = 25;
  }

  function getMetrics(){
  	$scope.completeCourses = 75;
  	$scope.writeAnwser = 25;
  	$scope.activities = 25;
  	$scope.currentCourses = 8;
  }

}
