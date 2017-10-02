angular.module('app').controller('app_menu', app_menu);
function app_menu($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.menus = { "sideMenuGroups": [
        {
          "groupName": "Menu Group - 1",
          "sideMenuItems": [
            {
              "itemName": "Order View",
              "dynPageName" : "OrderView"
            }
          ]
        }
      ]
    }
}
