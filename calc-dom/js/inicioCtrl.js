app.controller('inicioCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.setActive("mInicio");


        //http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&callback=JSON_CALLBACK
        $scope.utm = {};
        $scope.umc = 0;
        $scope.udt = 0;
        $scope.mc = 0;
        $scope.dt = 0;
        $scope.tumc = 0;
        $scope.tudt = 0;

        $http.get('php/getUTM.SBIF.php')
                .then(function (data) {

                    $scope.utm = data.data.UTMs[0];
                    $scope.utm.Valor = Number($scope.utm.Valor.replace('.', ''));
                    $scope.utm.api = "SBIF";
                    $scope.umc = $scope.utm.Valor * .0075;
                    $scope.udt = $scope.utm.Valor * .2;

                })
                .catch(function (respuesta) {
                    // Problemas con la peticion
                    $http.get('php/getUTM.MINDICADOR.php')
                            .then(function (data) {
                                $scope.utm = data.data.utm;
                                $scope.utm.Valor = $scope.utm.valor;
                                $scope.utm.Fecha = $scope.utm.fecha;
                                $scope.utm.api = "MINDICADOR";
                                $scope.umc = $scope.utm.Valor * .0075;
                                $scope.udt = $scope.utm.Valor * .2;
                            })
                            .catch(function (respuesta) {
                                $http.get('php/getUTM.INDICADORESDELDIA.php')
                                        .then(function (data) {
                                            $scope.utm = data.data.indicador;
                                            $scope.utm.Valor = Number($scope.utm.utm.replace(',00', '').replace('$', '').replace('.', ''));
                                            $scope.utm.Fecha = data.data.date;
                                            $scope.utm.api = "INDICADORESDELDIA";
                                            $scope.umc = $scope.utm.Valor * .0075;
                                            $scope.udt = $scope.utm.Valor * .2;
                                        })
                                        .catch(function (respuesta) {

                                        })
                                        .finally(function () {

                                        });
                            })
                            .finally(function () {

                            });
                })
                .finally(function () {
                    // Al terminar el THEN o CATCH
                });

        $scope.toCelcius = function (n, t) {
            switch (t) {
                case 'k':
                    return (Math.round((n - 273.15) * 100)) / 100;
            }
        };

    }]);


