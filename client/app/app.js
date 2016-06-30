angular.module('gm', ['gm.ctrl', 'gm.service', 'ui.router'])

.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/views/graphMaker.html',
      // controller: 'graphMakerCtrl'
    })
    // .state('graph', {
    //   url: '/graph',
    //   templateUrl: 'app/views/graphMaker.html',
    // });

});