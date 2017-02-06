angular.module('starter.categorias', ['ion-radial-progress'])

.controller('CategoriasCtrl', function($scope) {
  $scope.subcategorias = [];
  for (var i=0; i<10; i++) {
    $scope.subcategorias[i] = {
      name: i,
      conteudo: []
    };
    for (var j=0; j<3; j++) {
      $scope.subcategorias[i].conteudo.push(i + '-' + j);
    }
  }

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
