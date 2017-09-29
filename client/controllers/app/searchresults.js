angular.module('app').controller('app_searchresults', app_searchresults);
function app_searchresults($scope, $rootScope, app) {
    'use strict';
    app.init($scope);
    $scope.searchResults = $rootScope.searchResults;
    //alert($scope.searchResults[0].ordnum);
    
    $scope.columns = [
        { "name":"ordnum", "caption":"Order Number", "tooltip":"Order Number", "position":"10", "width":"200", "mobileField":"Title" } ,
        { "name":"custref", "caption":"Customer PO Number", "tooltip":"Customer PO Number", "position":"20", "width":"200", "mobileField":"Body" } ,
        { "name":"stcust", "caption":"Ship-To Customer", "position":"30", "width":"170", "mobileField":"Body" } ]
        
}