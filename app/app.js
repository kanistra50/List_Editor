var module = angular
    .module("test", [
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/list');

        $stateProvider
              .state('list', {
                  url: '/list',
                  templateUrl: 'templates/list.html',
                  controller: "listController",
                  controllerAs: "listCtrl"
              })
              .state('add', {
                  url: '/list/add',
                  templateUrl: 'templates/form.html',
                  controller: "addController",
                  controllerAs: "addCtrl"
              })
              .state('edit', {
                  url: '/list/edit/:id',
                  templateUrl: 'templates/form.html',
                  controller: "editController",
                  controllerAs: "editCtrl"
              });
    }])
    .controller('addController', function($scope) {
        function getId() {
            var id = 0;
            do {
                id = Math.random();
            } while (id === 1 || id === 0);
            return parseInt(id*100000000);
        }

        $scope.addItem = function() {
            console.log($scope.newItem);
            var newId = getId();
            $scope.items.push(
                {id: newId, value: $scope.newItem }
            );

        }
    }).controller('listController', function($scope) {
        $scope.items = [
            {id: 12345678, value: "First clever thing"},
            {id: 51234876, value: "Second clever thing"}
        ];
        $scope.removeItem = function(item) {
            if (confirm("Removing of string  - " + item.value +" ?")) {
                $scope.items.splice($scope.items.indexOf(item), 1);
            }
        };
        $scope.editItem = function(item) {
            //alert(item.value);
            $scope.newItem = item.value;
        };
    });

