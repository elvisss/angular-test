(function () {

'use strict';


  angular.module('SampleApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./views/home.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);
  
  // angular.module('SampleApp', ['ui.router', 'ngAnimate'])
  
  // .config([
  //   '$stateProvider',
  //   '$urlRouterProvider',
  //   '$locationProvider',
  //   function($stateProvider, $urlRouterProvider, $locationProvider) {
  //     $stateProvider.state('main', {
  //       abstract: true,
  //       template: '<ui-view class="main"></ui-view>',
  //       // controller: 'baseCtrl'
  //     }).state('home', {
  //       url: '/home',
  //       parent: 'main',
  //       controller: 'MainController',
  //       templateUrl: './views/home.html'
  //     });

  //     $urlRouterProvider.otherwise('/');
  //     // $locationProvider.html5Mode({
  //     //   enabled: false
  //     // });
  //   }
  // ]);

  //Load controller
  angular.module('SampleApp')

  .controller('MainController', [
    '$scope',

    function($scope) {

      $scope.test = "Hola";

      $scope.lista = [
        {'name':'Elvis', 'lastname':'Saavedra'},
        {'name':'Elvis 2', 'lastname':'Saavedra 2'}
      ]

    }
  ]);

}());