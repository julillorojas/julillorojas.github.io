var app = angular.module('CalcDomApp', ['ngRoute']);

app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.menuSuperior = 'parciales/menu.html';
        $scope.today = new Date();
        
        $scope.setActive = function (opcion) {
            $scope.mInicio = "";
            $scope.mLicencia = "";
            $scope[opcion] = "active";
        };

    }]);