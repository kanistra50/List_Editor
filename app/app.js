angular.module("test", [
    'ui.router'
])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/list');

        $stateProvider
            .state('list', {
                url: '/list',
                templateUrl: 'templates/list.html'
            })
            .state('add', {
                url: '/list/add',
                templateUrl: 'templates/form.html'
            })
            .state('edit', {
                url: '/list/edit/:{itemId}',
                templateUrl: 'templates/form.html'
            });
    }]);
