var eaiApp = angular.module('eai');

eaiApp.controller('perguntaController', function ($scope, $window) {
    var Pergunta = Parse.Object.extend('perguntas');
    $scope.gravar = function () {
        var usuario = new Usuario();
        pergunta.set('text', $scope.text);
        pergunta.save().then(function () {
            alert('Gravado com sucesso');
            $window.location.href = "#/lista-perguntas";

        }, function (error) {
            alert('Erro:' + error.message);
        });
    }
});