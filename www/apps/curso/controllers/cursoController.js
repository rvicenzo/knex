angular.module('starter.curso', [])

.controller('topoCursoController', topoCursoController)
.controller('cursoController', cursoController);

function cursoController($scope){

}

function topoCursoController($scope){
	$scope.completeCourses = 75;
  	$scope.writeAnwser = 25;
  	$scope.activities = 25;
  	$scope.currentCourses = 8;
}
