var singleApp = angular.module('eai', ['ngRoute']);

singleApp.config(function ($routeProvider) {
    $routeProvider
        .when('/idUsuario', {
            templateUrl: 'templates/tela-usuario.html',
            controller: 'usuarioController'
        })
        .when('/idPerguntas', {
            templateUrl: 'templates/tela-perguntas.html',
            controller: 'mainController'
        })
        .when('/lista-usuarios', {
            templateUrl: 'templates/lista-usuarios.html',
            controller: 'userController'
        })
});


singleApp.controller('mainController', function ($scope) {
    Parse.initialize("ZBUEZB2qVsZeRIrjZ771coLUbi6SeVdDDMpiI1ko", "VEVWjSgAQWi5GgboUla2QDytAevpNEvPr1OkXE6B");
});