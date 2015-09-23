// create the module and name it inventApp
        // also include ngRoute for all our routing needs
    var inventApp = angular.module('inventApp', ['ngRoute']);

    // configure our routes
    inventApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'templates/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'templates/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'templates/contact.html',
                controller  : 'contactController'
            });
    });

    