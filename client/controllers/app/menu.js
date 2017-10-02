angular.module('app').controller('app_menu', app_menu);
function app_menu($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.menu{ "sideMenuGroups": [
    {
      "groupName": "Menu Group - 1",
      "sideMenuItems": [
        {
          "itemName": "Group 1 - Menu Option 1"
        },
        {
          "itemName": "Group 1 - Menu Option 2"
        },
        {
          "itemName": "Group 1 - Menu Option 3"
        },
        {
          "itemName": "Group 1 - Menu Option 4"
        }
      ]
    },
    {
      "groupName": "Menu Group - 2",
      "sideMenuItems": [
        {
          "itemName": "Group 2 - Menu Option 1"
        },
        {
          "itemName": "Group 2 - Menu Option 2"
        }
      ]
    }
  ]
}
}
