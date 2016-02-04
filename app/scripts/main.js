

var app = angular.module('trendy', ['ui.sortable', 'ngMaterial']);
app.controller('MainCtrl', ['$http', '$scope', function($http, $scope) {
    $http.get('data/data.json').success(function(data) {
        $scope.details = data;
    });
}]);




app.controller('AppCtrl', function($scope, $mdDialog, $mdMedia) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    $scope.showAlert = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Hello')
            .textContent('- This Extension provide top trending webites per week')
            .ariaLabel('Trendy About')
            .ok('Got it!')
            .targetEvent(ev)
        );
    };


});
