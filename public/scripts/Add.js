/**
 * Created by Martin on 08.09.2016.
 */

angular.module('app');

app.controller('add', ['$scope','$http', function ($scope, $http){
    console.log("controller works fine");

    refresh();

    $scope.Fertig = function () {
        console.log($scope.AD);
        $http.post('/AD', $scope.AD).success(function (response) {
            console.log(response);
            refresh();
        });
    }
}]);
