var app = angular
    .module("test", [
        'ui.router'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/list');

        $stateProvider
              .state('list', {
                  url: '/list',
                  templateUrl: 'templates/list.html',
                  controller: function($scope){
                      $scope.items = [
                              {id: 12345, value: "First clever thing"},
                              {id: 51234, value: "Second clever thing"}
                          ];
                      $scope.removeItem = function(item) {
                          $scope.items.splice($scope.items.indexOf(item), 1);
                      };
                  }


                  //     {     //LocalStorage
                  //     itemsList: [
                  //         {id: 12345, value: "First clever thing"},
                  //         {id: 51234, value: "Second clever thing"}
                  //     ]
                  // }
              })
              .state('add', {
                  url: '/list/add',
                  templateUrl: 'templates/form.html',
                  controller: "addController",
                  controllerAs:"addCtrl"
              })
              .state('edit', {
                  url: '/list/edit/:id',
                  templateUrl: 'templates/form.html',
                  controller: "editController",
                  controllerAs:"editCtrl"
              })
         ;
    }]);
    // .controller('listController', function(itemsList, $state, $location) {
    //     this.items = [
    //         {id: 12345, value: "First clever thing"},
    //         {id: 51234, value: "Second clever thing"}
    //     ];
    // })
    // .controller('addController', function() {
    //
    // });

// .controller('ListCtrl', function($scope){
//         $scope.shoppingList = [
//             {name: 'Milk'},
//             {name: 'Eggs'},
//             {name: 'Bread'},
//             {name: 'Cheese'},
//             {name: 'Ham'},
//         ];
//   $scope.selectItem = function (selectedItem) {
//       ($scope.shoppingList).each(function(item){
//           item.selected = false;
//           if (selectedItem === item) {
//               selectedItem.selected = true;
//           }
//       });
//   };
// })
