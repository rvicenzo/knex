angular.module('starter.subcategorias', [])

.controller('SubCategoriasCtrl', function($scope) {


  $scope.partialRanking = '7°'; //Parcial
  $scope.evolution = '91%'; //Expert (nível)
  $scope.abilities = 71; //Habilidades

  $scope.getStyle = function (evolution) {
    var porcentage = parseInt(evolution.replace('%', ''));
    var style = {
      'margin-left': (100 - porcentage) + '%',
      'background-color': changeColor(porcentage),
      'width': evolution
    };

    return style;
  }

  function changeColor (porcentage) {
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

  //Menu dropdow
  //Os dados serão enviados via webservice
  $scope.subcategorias = [
        {
          name: 'Vendas',
          evolution: '63%',
          level: 'a',
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
          level: 'p',
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
          level: 'i',
          evolution: '100%',
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
        },
        {
          name: 'Atendimento',
          level: 'e',
          evolution: '99%',
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
