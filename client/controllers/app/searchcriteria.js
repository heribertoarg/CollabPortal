angular.module('app').controller('app_searchcriteria', app_searchcriteria);
function app_searchcriteria($scope, $rootScope, app) {
    'use strict';
    app.init($scope);
    
    $rootScope.dynPageName = "OrderView";
    $scope.getDynPageConfiguration($rootScope.dynPageName);
    
    $scope.datasources = {   
        DescriptionsDatasource : [ 
            { "colval":"1","lngdsc":"Option 1" },
            { "colval":"2","lngdsc":"Option 2" } ,
            { "colval":"3","lngdsc":"Option 3" } ,
            { "colval":"4","lngdsc":"Option 4" } 
        ]
    };
    
    $scope.$on('configurationDynPage.loaded', function (event, dynPageConfig) {

        var a = dynPageConfig;
        
        $scope.controls = $rootScope.dynPage.OrderPortalCfg.HEAD.OrderPortalControlsCollection.OrderPortalControls.OrderPortalControl;
        
        $scope.searchArray = {};
    
    });
    

 
    $scope.getDynPageConfiguration = function (dynPageName){
        $http.get("https://hkdnte214.asia.ad.flextronics.com:2872/api/configuration/dynpages/" + dynPageName)
        .then(function successCallback(response) {
            //return = response.data;
            $rootScope.$broadcast('dashboard.loaded', response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
                
    }
    
 
    $scope.search = function (){
        $http.post("http://localhost:61454/api/values",$scope.searchArray)
            .then(function successCallback(response) {
                $rootScope.searchResults = response.data;
                app.go('app.searchresults'); 
            }, function errorCallback(response) {
                return response;
            });
    }  
    
}