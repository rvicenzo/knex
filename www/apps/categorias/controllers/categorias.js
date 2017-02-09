angular.module('starter.categorias', [])

.controller('CategoriasCtrl', CategoriasCtrl);

function CategoriasCtrl($scope) {
	$scope.trilhas = [
		{
			nome: 'Agência',
			level: 'e',
			percent: 38,
			icone: 'agencia',
			cursos: 4
		},
		{
			nome: 'Veículos',
			level: 'a',
			percent: 68,
			icone: 'car',
			cursos: 20
		},
		{
			nome: 'Comercial',
			level: 'i',
			percent: 98,
			icone: 'comercial',
			cursos: 6
		},
		{
			nome: 'Marketing',
			level: 'p',
			percent: 100,
			icone: 'grafico',
			cursos: 2
		}
	];

	$scope.changeColor = function (porcentage) {
		if (porcentage >= 0 && porcentage < 39) {
			//cinza
			return '#7f7f7f';
		} else if (porcentage >= 40 && porcentage < 69) {
			//laranja
			return '#fa6600';
		} else if (porcentage >= 70 && porcentage < 99) {
			//verde
			return '#25a083';
		} else if (porcentage == 100) {
			//azul
			return '#0001ff';
		} else {
			//amarelo - desafio final
			return '#dad805';
		}
	}
}
