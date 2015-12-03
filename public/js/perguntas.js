var eaiApp = angular.module('eai');

eaiApp.controller('pergController', function ($scope) {
    var Pergunta = Parse.Object.extend('perguntas');
    var query = new Parse.Query(Pergunta);

    query.find().then(function (dados) {
        $scope.perguntas = _.map(dados, function (pergunta) {

            return {
                id: pergunta.id,
                texto: pergunta.get('texto')

            };
        });

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    });

    $scope.excluir = function () {
        var query = new Parse.Query(Pergunta);
        $scope.perguntas = _.filter($scope.perguntas, function (pergunta) {
            if (pergunta.selecionado) {
                query.get(pergunta.id).then(function (upPergunta) {
                    upPergunta.destroy();
                });
            }
            return !pergunta.selecionado;
        });
    };
});