/**
 * Created by Martin on 06.09.2016.
 */

angular.module('app');

app.controller('mainController',function mainController($scope) {
    $scope.message = 'BlaBlaBla';

});


    app.controller('read', ['$scope', '$http', function ($scope, $http) {
        console.log("controller works fine");

        var refresh = function() {

        $http.get('/AD').success(function (response) {
            console.log("get the data");
            $scope.AD = response;
            $scope.AD = "";
        });
    };

    refresh();

        refresh();

        $scope.Fertig = function () {
            console.log($scope.AD);
            $http.post('/AD', $scope.AD).success(function (response) {
                console.log(response);
                refresh();
            });
        }
    }]);

app.controller('test',function test ($scope) {
    console.log('test');
});

