angular.module('starter.categorias', ['ion-radial-progress'])

.controller('CategoriasCtrl', function($scope) {


  //Menu dropdow
  //Os dados serão enviados via webservice
  $scope.subcategorias = [
        {
          name: 'Vendas',
          evolution: '63%',
          courses: [
            {
              courseName: 'Fechamento',
              score: 26
            },
            {
              courseName: 'Entregas',
              score: 47
            },
            {
              courseName: 'Preparação',
              score: 0
            },
            {
              courseName: 'Contrato',
              score: 81
            }
          ]
        },
        {
          name: 'Suporte',
          evolution: '15%',
          courses: [
            {
              courseName: 'Item 01',
              score: 10
            },
            {
              courseName: 'Item 02',
              score: 25
            },
            {
              courseName: 'Item 03',
              score: 5
            },
            {
              courseName: 'Item 04',
              score: 70
            }
          ]
        },
        {
          name: 'Atendimento',
          evolution: '50%',
          courses: [
            {
              courseName: 'Item 01',
              score: 5
            },
            {
              courseName: 'Item 02',
              score: 15
            },
            {
              courseName: 'Item 03',
              score: 10
            },
            {
              courseName: 'Item 04',
              score: 90
            }
          ]
        }
      ];

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
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

});
