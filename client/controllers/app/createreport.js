angular.module('app').controller('app_createreport', app_createreport);
function app_createreport($scope, app) {
    'use strict';
    app.init($scope, function() {
        $scope.data.category.options=JSON.parse($scope.data.category.options);
    });
}