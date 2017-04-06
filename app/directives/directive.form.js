angular.module("test")
    .directive('dirForm', function () {
        return {
            scope: true,
            restrict: "A",
            templateUrl:'templates/form.html',
            link: function (scope, element, attrs)
            {
                // scope.items = attrs.dirForm;
                console.log("scope d2 - " + scope.items);
            }
        }
    });
