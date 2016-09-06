/**
 * Created by Martin on 06.09.2016.
 */
//routes

var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : "pages/home.html",
            controller  : 'mainController'
        })

        .when('#', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/create', {
            templateUrl : 'pages/create.html'
        })
        //route for the login page

        .when('/verwalten', {
            templateUrl : 'pages/verwalten.html',
            controller  : 'mainController'
        })


});

