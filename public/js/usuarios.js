var eaiApp = angular.module('eai');

eaiApp.controller('userController', function ($scope) {
    var Usuario = Parse.Object.extend('usuarios');
    var query = new Parse.Query(Usuario);

    query.find().then(function (dados) {
        $scope.usuarios = _.map(dados, function (usuario) {

            return {
                id: usuario.id,
                nome: usuario.get('nome'),
                email: usuario.get('email'),
                senha: usuario.get('senha'),
                matricula: usuario.get('matricula')
            };
        });

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    });

    $scope.excluir = function () {
        var query = new Parse.Query(Usuario);
        $scope.usuarios = _.filter($scope.usuarios, function (usuario) {
            if (usuario.selecionado) {
                query.get(usuario.id).then(function (upUsuario) {
                    upUsuario.destroy();
                });
            }
            return !usuario.selecionado;
        });
    };
});