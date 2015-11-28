var singleApp = angular.module('eai', ['ngRoute']);

singleApp.config(function ($routeProvider) {
    $routeProvider
        .when('/idUsuario', {
            templateUrl: 'tela-usuario.html',
            controller: 'mainController'
        })
        .when('/idPesquisa', {
            templateUrl: 'tela-tipo-perguntas.html',
            controller: 'mainController'
        })
        .when('/idPergunta', {
            templateUrl: 'tela-perguntas.html',
            controller: 'mainController'
        })
});

singleApp.controller('mainController', function ($scope) {

});