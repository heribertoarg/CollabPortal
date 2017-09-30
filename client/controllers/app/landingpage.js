angular.module('app').controller('app_landingpage', app_landingpage);
function app_landingpage($scope, $rootScope, $http, app) {
    'use strict';
    app.init($scope);
    
    $scope.getdynpage = function(){
        
        
        
        debugger;
        $scope.search = function(){
        $http.post("http://localhost:61454/api/values",$scope.searchArray)
            .then(function successCallback(response) {
                $rootScope.searchResults = response.data;
                app.go('app.searchresults'); 
            }, function errorCallback(response) {
                return response;
            });
        }
        
        
        $http.get("http://localhost:44330/api/configuration/dynpages/OrderView")
        .then(function successCallback(response) {
            $rootScope.dynPage = response.data;
            app.go('app.searchcriteria'); 
        }, function errorCallback(response) {
            return response;
        });
    }
}