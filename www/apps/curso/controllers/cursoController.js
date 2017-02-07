angular.module('starter.curso', [])

.controller('topoCursoController', topoCursoController)
.controller('cursoController', cursoController);

function cursoController($scope){
	var topicos = [];
	topicos.push({id: 1, text: 'Cumprimentar o cliente', done: true});
	topicos.push({id: 2, text: 'Iniciar a entrega', done: false});
	topicos.push({id: 3, text: 'Demonstrar o veículo', done: true});
	topicos.push({id: 4, text: 'Tirar dúvidas', done: true});
	$scope.topicos = topicos;
}

function topoCursoController($scope){
	  $scope.completeCourses = 100;
  	$scope.writeAnwser = 25;
  	$scope.activities = 25;
  	$scope.currentCourses = 8;

  	//pegando a cor da porcentagem do curso
  	$scope.colorCourse = changeColor($scope.completeCourses);

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
}
