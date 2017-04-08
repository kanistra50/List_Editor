/**
 * The Default Controller module
 *
 */

module
    .controller('defaultCtrl', ['$scope', 'Storage', function($scope, Storage) {

        $scope.items = [];
        $scope.show = true;
        var Id, num;

        var data = Storage.getData();

        if (!data || !data[0]) {
            // console.log(data);
            Storage.setData([
                    {id: 12345678, value: "First clever thing"},
                    {id: 51234876, value: "Second clever thing"}
                ]
            );
            $scope.items = Storage.getData();
        } else {
            $scope.items = data;
        }

        // }
        //
        // $scope.items = data = Storage.getData();

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
            }

            Storage.setData($scope.items);
        };

        $scope.add = function() {
            $scope.inInput = "";
            console.log("text in input: " + $scope.inInput);
            Id = 0;
        };

        $scope.edit = function(item) {
//            console.log(item.value);
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
                    console.log("add new item with text: "+ text);
                }
                else {
                    $scope.items[num].value = text;
                    console.log("item was modified");
                }
                Storage.setData($scope.items);
            } else {
                alert('Please write something !');
            }
        };
        console.log("Controller loaded");
    }]);
