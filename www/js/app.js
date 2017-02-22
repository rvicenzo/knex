// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.menuTeste', 'starter.explore', 'starter.menu', 'starter.curso', 'starter.subcategorias', 'starter.categorias', 'starter.eventos', 'starter.calendario', 'ui.rCalendar'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })

  .state('app.menuRodape', {
    url: '/menuRodape',
    views: {
      'menuContent': {
        templateUrl: 'apps/menu/menuRodape.html',
      }
    }
  })
  .state('app.explorar', {
    url: '/explorar',
    views: {
      'menuContent': {
        templateUrl: 'apps/explorar/explorar.html'
      }
    }
  })
  .state('app.curso', {
    url: '/curso',
    views: {
      'menuContent': {
        templateUrl: 'apps/curso/curso.html'
      }
    }
  })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.subcategorias', {
    url: '/subcategorias',
    views: {
      'menuContent': {
        templateUrl: 'apps/subcategorias/subcategorias.html'
      }
    }
  })
  .state('app.categorias', {
    url: '/categorias',
    views: {
      'menuContent': {
        templateUrl: 'apps/categorias/categorias.html'          
      }
    }
  })
  .state('app.eventos', {
    url: '/eventos',
    views: {
      'menuContent': {
        templateUrl: 'apps/eventos/eventos.html'          
      }
    }
  })
  .state('app.calendario', {
    url: '/calendario',
    views: {
      'menuContent': {
        templateUrl: 'apps/calendario/calendario.html'          
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/menuRodape');
});
