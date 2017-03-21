var module = angular.module("test");

module
    .controller('defaultController', function($scope) {

        $scope.items = [];

        (function(){
            if (!localStorage.getItem("itemsList")) {
                localStorage.setItem("itemsList", [
                        [12345678, "First clever thing"],
                        [51234876,"Second clever thing"]
                    ]
                );
            }
            var data = localStorage.getItem("itemsList").split(",");
            console.log(data);
            var len = data.length;
            for (var i=0; i<len; i++) {
                $scope.items.push({id: data[i], value: data[i+1]});
                i++;
            }

        })();

        var Id, num;

        function getId() {
            var random = 0;
            do {
                random = Math.random();
            } while (random === 1 || random === 0);
            return parseInt(random*100000000);
        }

        $scope.remove = function(item) {
            if (confirm("Removing of string  - " + item.value +" ?")) {
                $scope.items.splice($scope.items.indexOf(item), 1);
            };
            var arr=[];
            var len = $scope.items.length;
            for (var i=0; i<len; i++) {
                arr[i] = [$scope.items[i].id, $scope.items[i].value];
            };
            localStorage.setItem("itemsList", arr);
        };
    
        $scope.add = function() {
            $scope.inInput = "";
            console.log("text in input: " + $scope.inInput);
            Id = 0;
        };
    
        $scope.edit = function(item) {
            //console.log(item.value);
            $scope.inInput = item.value;
            Id = item.id;
            num = $scope.items.indexOf(item);
        };

        $scope.save = function(text) {

            if (text) {
                if (!Id ) {

                    var newId = getId();
                    $scope.items.push(
                        {id: newId, value: text}
                    );

                    //console.log("add new item with text: "+ text);

                }
                else {
                    $scope.items[num].value = text;
                    //console.log("item was modified");
                }
            } else {
                alert('Please write something !');
            };

            var arr=[];
            var len = $scope.items.length;
            for (var i=0; i<len; i++) {
                arr[i] = [$scope.items[i].id, $scope.items[i].value];
            };
            localStorage.setItem("itemsList", arr);

        };


        console.log("Loaded");

    });

