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
  getMedals();

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

  function getMedals(){

    //agrupar medalhas de 3 em 3
    var medals = [];
    medals.push({img: 'img/medal1.png', text: 'Atendimento ao cliente'});

    var arrays = [], size = 3;

    while (medals.length > 0){
        arrays.push(medals.splice(0, size));
    }

    $scope.medals = arrays;
    console.log(arrays);

  }

  function getMetrics(){
    //total
    $scope.total1 = 66;
    $scope.total2 = 55;
    $scope.total3 = 55;
    $scope.total4 = 32;

    //score
    $scope.score1 = 33;
    $scope.score2 = 44;
    $scope.score3 = 12;
    $scope.score4 = 32;

    //porcentage
    $scope.porcentage1 = parseInt($scope.score1*100/$scope.total1);
    $scope.porcentage2 = parseInt($scope.score2*100/$scope.total2);
    $scope.porcentage3 = parseInt($scope.score3*100/$scope.total3);
    $scope.porcentage4 = parseInt($scope.score4*100/$scope.total4);

    //colors
    $scope.color1 = changeColor($scope.porcentage1);
    $scope.color2 = changeColor($scope.porcentage2);
    $scope.color3 = changeColor($scope.porcentage3);
    $scope.color4 = changeColor($scope.porcentage4);
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

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

}
