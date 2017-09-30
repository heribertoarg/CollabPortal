angular.module('app').controller('app_landingpage', app_landingpage);
function app_landingpage($scope, $rootScope, $http, app) {
    'use strict';
    app.init($scope);
    
    $scope.getdynpage = function(){
        $http.get("https://hkdnte214.asia.ad.flextronics.com:2872/api/configuration/dynpages/OrderView")
        .then(function successCallback(response) {
            //$rootScope.dynPage = response.data;
            app.go('app.searchcriteria'); 
        }, function errorCallback(response) {
            return response;
        });
    }
}