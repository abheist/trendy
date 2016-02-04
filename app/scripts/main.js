var app = angular.module('trendy', []);
app.controller('MainCtrl', ['$http', '$scope', function($http, $scope) {
    $http.get('data/data.json').success(function(data) {
        $scope.details = data;
    });
}]);
