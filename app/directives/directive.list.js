angular.module("test")
    .directive('dirList', function () {
        return {
            scope: true,
            restrict: "A",
            templateUrl:'templates/list.html',
            link: function (scope, element, attrs)
            {
                // scope.items = attrs.dirList;
                console.log("scope d1 - " + scope.items);
            }
        };
    });
