angular.module('app').controller('app_landingpage', app_landingpage);
function app_landingpage($scope, $rootScope, $http, app) {
    'use strict';
    app.init($scope);
    
    $scope.getdynpage = function(dynPageName){
        //$http.get("https://hkdnte214.asia.ad.flextronics.com:2872/api/configuration/dynpages/OrderView")
        $http.get("https://localhost:44330/api/configuration/dynpages/" + dynPageName)
        
        .then(function successCallback(response) {
            $rootScope.dynPage = response.data;
            app.go('app.searchcriteria'); 
        }, function errorCallback(response) {
            return response;
        });
    }
}