angular.module('app').controller('app_menu', app_menu);
function app_menu($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.menus = { "sideMenuGroups": [
        {
          "groupName": "Dynamic Pages",
          "sideMenuItems": [
            {
              "itemName": "Order View",
              "dynPageName" : "OrderView"
            }
          ]
        }
      ]
    }
    
    $scope.getdynpage = function(dynPageName){
        $http.get("https://hkdnte214.asia.ad.flextronics.com:2872/api/configuration/dynpages/" + dynPageName)
        .then(function successCallback(response) {
            $rootScope.dynPage = response.data;
            app.go('app.searchcriteria'); 
        }, function errorCallback(response) {
            return response;
        });
    }
}
