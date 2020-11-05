/*
 AngularJS v1.8.0
 (c) 2010-2020 Google, Inc. http://angularjs.org
 License: MIT
*/

var myModule = angular.module("myModule", []);

myModule.controller("secondController", function ($scope) {
    $scope.toggle = function () {
        $scope.state = !$scope.state;
    }
})
myModule.controller("myController", function ($scope) {
    $scope.record = [
        { "name": "Shayan Akhter", "age": 18, "class": 16 },
        { "name": "Ushan", "age": 20, "class": 16 }
    ];

    $scope.deleteUser = function () {
        var index = this.$index;
        $scope.record.splice(index, 1)
    }

    $scope.addUser = function () {
        $scope.record.push(
            {
                "name": $scope.data.name,
                "age": $scope.data.age,
                "class": $scope.data.class
            }
        )

        $scope.data.name = ""
        $scope.data.age = ""
        $scope.data.class = ""

    }

    $scope.editUser = function () {
        $scope.x = { "display": "block" }
        var index = this.$index;
        $scope.edit.index = index
        $scope.edit.name = $scope.record[index].name
        $scope.edit.age = $scope.record[index].age
        $scope.edit.class = $scope.record[index].class
    }

    $scope.updateUser = function () {
        $scope.x = { "display": "none" }
        var index = $scope.edit.index;
        $scope.record[index] = (
            {
                "name": $scope.edit.name,
                "age": $scope.edit.age,
                "class": $scope.edit.class
            }
        )

        $scope.edit.name = ""
        $scope.edit.age = ""
        $scope.edit.class = ""
    }
})