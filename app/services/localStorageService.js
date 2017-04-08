angular.module("storeService", ['ui.router'])

    .factory('Storage', function() {

        var name = 'myStorage';
        return {
            getData: function () {
                var data = localStorage.getItem(name);
                console.log("STORAGE:" + data);
                return JSON.parse(data);
            },
            setData: function(lists) {
                localStorage.setItem(name, JSON.stringify(lists));
            }
        }

    });
    console.log("Storage Service  Loaded");
