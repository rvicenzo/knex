angular.module('starter.categorias', [])

.controller('CategoriasCtrl', CategoriasCtrl);

function CategoriasCtrl($scope) {
	$scope.trilhas = [
		{
			nome: 'Agência',
			level: 'e',
			percent: 90,
			icone: 'agencia',
			cursos: 4
		},
		{
			nome: 'Agência',
			level: 'e',
			percent: 90,
			icone: 'agencia',
			cursos: 4
		},
		{
			nome: 'Agência',
			level: 'e',
			percent: 90,
			icone: 'agencia',
			cursos: 4
		}
	];
}
