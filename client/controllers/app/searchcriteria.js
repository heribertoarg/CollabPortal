angular.module('app').controller('app_searchcriteria', app_searchcriteria);
function app_searchcriteria($scope, $rootScope, $http, app) {
    'use strict';
    app.init($scope);

    $scope.getdynpage = function(){
        $http.get("http://localhost:44330/api/ConfigurationApi")
        .then(function successCallback(response) {
            $rootScope.dynPage = response.data;
            //app.go('app.searchresults'); 
        }, function errorCallback(response) {
            return response;
        });
    }

    
    $rootScope.dynPageName = "OrderView";
    
    $scope.controls = $rootScope.dynPage.OrderPortalCfg.HEAD.OrderPortalControlsCollection.OrderPortalControls.OrderPortalControl;
    
    $scope.datasources = {   
        DescriptionsDatasource : [ 
            { "colval":"1","lngdsc":"Option 1" },
            { "colval":"2","lngdsc":"Option 2" } ,
            { "colval":"3","lngdsc":"Option 3" } ,
            { "colval":"4","lngdsc":"Option 4" } 
        ]
    };
    
    $scope.searchArray = {};
 
    $scope.getdynpage();
 
    $scope.search = function(){
        $http.post("http://localhost:61454/api/values",$scope.searchArray)
        .then(function successCallback(response) {
            $rootScope.searchResults = response.data;
            app.go('app.searchresults'); 
        }, function errorCallback(response) {
            return response;
        });
    }
    

}