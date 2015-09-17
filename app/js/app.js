
angular.module('myApp', ['ngRoute'])

.run(function($rootScope) {
  $rootScope.name = "Ari Lerner";
})

.config(function($stateProvider, $RouterProvider, $urlRouterProvider) {
 
  //
  // Now set up the states
  /*$stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "index.html",
      controller: 'MyController'
    })
    .state('app/home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'HomeController'
        }
      }
    });*/

    $routeProvider.when("/home", {template: "templates/home.html" })
    .otherwise({redirectTo: "/index", template : "index.html"});
     //
  // For any unmatched url, redirect to /state1
  //$urlRouterProvider.otherwise("app/index");
});
