// create the module and name it inventApp
        // also include ngRoute for all our routing needs
    var inventApp = angular.module('inventApp', ['ngRoute', 'invent.controllers']);

    inventApp.constant('INVENT_WEBSER_URL', 'http://localhost:2951/api');
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

            // route for the dashboard page
            .when('/dashboard', {
                templateUrl : 'templates/dashboard.html',
                controller  : 'Controller'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'templates/contact.html',
                controller  : 'contactController'
            })

            .when('/partsummery', {
                templateUrl : 'templates/partsummery.html',
                controller  : 'partsController'
            })

            .when('/ReceiveParts', {
                templateUrl : 'templates/ReceiveParts.html',
                controller  : 'partsController'
            });
    });

    