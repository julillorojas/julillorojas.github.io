app.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'parciales/home.html',
                controller: 'inicioCtrl'
            })
            .when('/licencia', {
                templateUrl: 'parciales/licencia.html',
                controller: 'licenciaCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
});

