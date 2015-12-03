var eaiApp = angular.module('eai');

eaiApp.controller('pergController', function ($scope) {
    var Pergunta = Parse.Object.extend('perguntas');
    var query = new Parse.Query(perguntas);

    query.find().then(function (dados) {
        $scope.perguntas = _.map(dados, function (pergunta) {

            return {
                texto: pergunta.get('texto')

            };
        });

        if (!$scope.$$phase) {
            $scope.$apply();
        }
    });
});