'use strict';

/**
 * @ngdoc overview
 * @name templateApp
 * @description
 * # templateApp
 *
 * Main module of the application.
 */
angular
  .module('templateApp', [
    //'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'backand',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs : 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });

      //This fix is because with Angular 1.6.x it resolves different the URL, so we can add this fix or downgrade the angular version
      $locationProvider.hashPrefix('');
  })
  //The run is a kick start of the application
  .run(['$rootScope', '$location', 'Backand','material', function($rootScope, $location, Backand, material){
    //console.log(material);
    material.init(); //We load the material design library when the application routeChangeStart
    //Backand configuration
    Backand.setAppName('demoproject');

    $rootScope.$on('$routeChangeStart', function(event, next){
      $rootScope.activeMenu = $location.url();
      if($location.url() === '/about'){
        $rootScope.activeMenu = '/about';
      }else if($location.url() === '/contact'){
        $rootScope.activeMenu = '/contact';
      }
    });

    //Backand.setSignUpToken('be4f9f72-ae3c-4e04-b64d-a7dc414059a6');
    //Backand.setAnonymousToken('bf256965-d625-4aa1-99a0-df0cecb2a7c2SSS');
    //App Name
    Backand.signin('jordavids_22@hotmail.com', 'football100').then(function(data){
      //console.log(data);
    },function(data, status, header, config){
      //console.log('Error = ' + data);
    });
  }]);
