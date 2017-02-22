angular.module('starter.calendario', [])

.controller('CalendarioCtrl', CalendarioCtrl);

function CalendarioCtrl($scope) {
	$scope.eventos = [
		{
			startTime: new Date(2017, 1, 15, 15, 15),
			endTime: new Date(2017, 1, 15, 16, 20),
			title: 'Especial Automóveis VR Parte 2',
			allDay: false
		},
		{
			startTime: new Date(2017, 1, 15, 20, 00),
			endTime: new Date(2017, 1, 15, 21, 00),
			title: 'Especial Automóveis VR Parte 3',
			allDay: false
		},
		{
			startTime: new Date(2017, 1, 15, 08, 00),
			endTime: new Date(2017, 1, 15, 09, 00),
			title: 'Especial Automóveis VR',
			allDay: false
		},
		{
			startTime: new Date(2017, 3, 1, 08, 00),
			endTime: new Date(2017, 3, 1, 09, 00),
			title: 'Especial Automóveis VR',
			allDay: false
		},
		{
			startTime: new Date(2017, 1, 20, 20, 00),
			endTime: new Date(2017, 1, 20, 21, 00),
			title: 'Evento de teste',
			allDay: true
		}
	];

	$scope.changeDate = function (action) {
		$scope.$broadcast('changeDate', action);
	}

	$scope.onViewTitleChanged = function (title) {
		$scope.viewTitle = title;
	};

	$scope.detailTemplate = 'templates/eventDetail.html';
	$scope.selectedDate = new Date(2017, 1, 28);
}
