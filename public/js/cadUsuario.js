var eaiApp = angular.module('eai');

eaiApp.controller('usuarioController', function ($scope) {
    var Usuario = Parse.Object.extend('usuarios');
    $scope.gravar = function () {
        var usuario = new Usuario();
        usuario.set('nome', $scope.nome);
        usuario.set('email', $scope.email);
        usuario.set('senha', $scope.senha);
        usuario.set('matricula', $scope.matricula);
        usuario.save().then(function () {
            alert('Gravado com sucesso');

        }, function (error) {
            alert('Erro:' + error.message);
        });
    }
});