angular.module('starter.eventos', [])

.controller('EventosCtrl', EventosCtrl);

function EventosCtrl($scope) {
	$scope.destaque = {
		url: 'apps/eventos/img/bg-predio.png',
		nome: 'Nome do vídeo',
		descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non molestie mauri'
	};

	$scope.videos = [
		{
			url: 'apps/eventos/img/bg-predio.png',
			nome: 'Nome do vídeo',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non molestie mauri'
		},
		{
			url: 'apps/eventos/img/bg-predio.png',
			nome: 'Nome do vídeo',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non molestie mauri'
		},
		{
			url: 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
			nome: 'Nome do vídeo',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non molestie mauri'
		},
		{
			url: 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
			nome: 'Nome do vídeo',
			descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non molestie mauri'
		}
	];

	$scope.showFiltros = false;
	$scope.exibirFiltros = function () {
		$scope.showFiltros = !$scope.showFiltros;
	}
}
