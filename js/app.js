angular.module('mini-routing', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

  $stateProvider
    .state ('home', {
      url: '/',
      templateUrl: '/js/home/homeTmpl.html',
      controller: 'homeCtrl'
    })

   .state ('settings', {
      url: '/settings',
      templateUrl: '/js/settings/settingsTmpl.html',
      controller: 'settingsCtrl'
   })

   .state ('products', {
     url: '/products/:product',
     templateUrl: '/js/products/productsTmpl.html',
     controller: 'productsCtrl'
   })




});
