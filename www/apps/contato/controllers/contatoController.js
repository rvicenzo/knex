angular.module('starter.contato', [])

.controller('contatoController', contatoController);

function contatoController($scope){
  getInfo();
  getMedals();
  getMetrics();
  aproveitamento();

  function getInfo(){
    $scope.nameContact = "Jon Snow";
    $scope.descContact = "Agência 88";
    $scope.positionContact = "16";
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
    $scope.total1Contact = 66;
    $scope.total2Contact = 55;
    $scope.total3Contact = 55;
    $scope.total4Contact = 32;

    //score
    $scope.score1Contact = 33;
    $scope.score2Contact = 44;
    $scope.score3Contact = 12;
    $scope.score4Contact = 32;

    //porcentage
    $scope.porcentage1Contact = parseInt($scope.score1Contact*100/$scope.total1Contact);
    $scope.porcentage2Contact = parseInt($scope.score2Contact*100/$scope.total2Contact);
    $scope.porcentage3Contact = parseInt($scope.score3Contact*100/$scope.total3Contact);
    $scope.porcentage4Contact = parseInt($scope.score4Contact*100/$scope.total4Contact);

    //colors
    $scope.color1Contact = changeColor($scope.porcentage1Contact);
    $scope.color2Contact = changeColor($scope.porcentage2Contact);
    $scope.color3Contact = changeColor($scope.porcentage3Contact);
    $scope.color4Contact = changeColor($scope.porcentage4Contact);
  }

  function changeColor(porcentage){
    console.log('porcentage: '+ porcentage);
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
    $scope.aproveitamentoContact = [{name: 'Empreendedorismo', porcentage: '77'}, {name: 'Tv em Geral', porcentage: '40'}];
  }
}
