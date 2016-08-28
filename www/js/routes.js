angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('menu.home', {
    url: '/localhost/home',
    views: {
      'menu': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.detalhes', {
    url: '/detalhes',
    views: {
      'menu': {
        templateUrl: 'templates/detalhes.html',
        controller: 'detalhesCtrl'
      }
    }
  })

  .state('menu.historico', {
    url: '/historico',
    views:{
      'menu':{
        templateUrl: 'templates/historico.html',
        controller: 'historicoCtrl'
      }
    }
  })
  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  $urlRouterProvider.otherwise('menu/localhost/home')

});

