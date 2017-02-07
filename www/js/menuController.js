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
  aproveitamento();

  $scope.getMarginLeft = function (evolution) {
    var marginLeft = 100 - parseInt(evolution.replace('%', ''));
    return marginLeft + '%';
  }

  function getInfo(){
  	$scope.imgProfile = 'img/jon.jpeg';
  	$scope.nameProfile = 'Jon Snow';
  	$scope.scoreProfile = '700';
  	$scope.general = 1;
  	$scope.skills = 55;
  	$scope.progress = 25;
    $scope.evolution = '91%'; //Expert (nível)
    $scope.imgProfile = {
      "background": 'url('+$scope.imgProfile+') center no-repeat',
      "background-size": 'cover'
    }
  }

  function getMetrics(){
  	$scope.completeCourses = 75;
  	$scope.completeCoursesColor = changeColor($scope.completeCourses);
  	$scope.writeAnwser = 25;
  	$scope.writeAnwserColor = changeColor($scope.writeAnwser);
  	$scope.activities = 50;
  	$scope.activitiesColor = changeColor($scope.activities);
  	$scope.currentCourses = 8;
  }

  function changeColor(porcentage){
  		if(porcentage>=0 && porcentage<39){
  			//cinza
  			return '#7f7f7f';
  		}
  		else if(porcentage>=40 && porcentage<69){
  			//laranja
  			return '#fa6600';
  		}
  		else if(porcentage>=70 && porcentage<99){
  			//verde
  			return '#25a083';
  		}
  		else if(porcentage==100){
  			//azul
  			return '#0001ff';
  		}
  		else{
  			//amarelo - desafio final
  			return '#dad805';
  		}
  }

  function aproveitamento(){
    $scope.aproveitamento = [{name: 'Empreendedorismo', porcentage: '77'}, {name: 'Tv em Geral', porcentage: '40'}];
  }

}
