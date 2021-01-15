import angular from 'angular';
import '@uirouter/angularjs';
import './main/main.module';
var mainApp = angular.module('mainApp', [ 'ui.router' ]);

mainApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    
    $stateProvider.state("homePage", {
        url: "/home",
        templateUrl: "public/home.html",
        controller: "appController"
    }).state("teacherPage", {
        pageTitle: "Find Me a Teacher",
        url: "/teacher",
        templateUrl: "public/teacher.html",
        controller: "teacherController"
    })

    $urlRouterProvider.otherwise('/');
}]);

mainApp.controller('appController',  ['$scope', function ($scope) {
    $scope.title = 'Welcome Home';
}]
)
mainApp.controller('teacherController',  ['$scope', function ($scope) {
    $scope.title = 'Hello Teacher';
}]
)
