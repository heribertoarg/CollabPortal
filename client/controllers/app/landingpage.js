angular.module('app').controller('app_landingpage', app_landingpage);
function app_landingpage($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.getdynpage = function(){
        $http.get("http://localhost:44330/api/configuration/dynpages/OrderView")
        .then(function successCallback(response) {
            $rootScope.dynPage = response.data;
            //app.go('app.searchresults'); 
        }, function errorCallback(response) {
            return response;
        });
    }
}