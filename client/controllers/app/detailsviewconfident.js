angular.module('app').controller('app_detailsviewconfident', app_detailsviewconfident);
function app_detailsviewconfident($scope, app) {
    'use strict';
    app.init($scope);
    $scope.incrementQuant = function () {
        $scope.data.quantity++;
    };
    $scope.decrementQuant = function () {
        if ($scope.data.quantity > 0) {
            $scope.data.quantity--;
        }
    };
}