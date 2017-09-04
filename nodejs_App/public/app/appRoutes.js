/**
 * Created by prguleri on 9/3/2017.
 */
var app = angular.module('appRoutes',['ngRoute']);



app.config(function ($routeProvider,$locationProvider) {

    $routeProvider.when('/',{
        title: 'Homepage',
        templateUrl: 'app/views/pages/homepage.html',
        controller: 'homectrl'
    });

    //To remove #! from the url
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);

});

