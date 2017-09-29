angular.module('app').controller('app_searchcriteria', app_searchcriteria);
function app_searchcriteria($scope, $rootScope, app) {
    'use strict';
    app.init($scope);
    
    $rootScope.dynPageName = "OrderView";
    
    var configurationDynPageUrl = "https://hkdnte214.asia.ad.flextronics.com:2872/api/configuration/dynpages/" + $rootScope.dynPageName;
    
    
    
    $rootScope.dynPage = {
    	"OrderPortalCfg": {
    		"TITLE": "Order View",
    		"FILENAME": "OrderView.xml",
    		"SCREENTYPE": "Page",
    		"HEAD": {
    			"OrderPortalControlsCollection": {
    				"OrderPortalControls": {
    					"OrderPortalControl": [
    						{
    							"ControlName": "ordnum",
    							"ControlType": "TextBox",
    							"ControlCaption": "Order Number",
    							"IntelliSense": {
    								"IntelliService": "IntelliOrdersDatasource",
    								"pkeys": "client_id,wh_id",
    								"prefix": "ord_prefix",
    								"minlength": "2",
    								"DisplayColumn": "ordnum"
    							}
    						},
    						{
    							"ControlName": "cust_ref",
    							"ControlType": "TextBox",
    							"ControlCaption": "Customer PO Number"
    						},
    						{
    							"ControlName": "stcust",
    							"ControlType": "TextBox",
    							"ControlCaption": "Ship-To Customer"
    						},
    						{
    							"ControlName": "ordtyp",
    							"ControlType": "Combobox",
    							"ControlCaption": "Order Type",
    							"LookupService": {
    								"DisplayColumn": "lngdsc",
    								"ValueColumn": "colval",
    								"name": "DescriptionsDatasource"
    							}
    						},
    						{
    							"ControlName": "btcust",
    							"ControlType": "TextBox",
    							"ControlCaption": "Bill-To-Customer"
    						},
    						{
    							"ControlName": "rtcust",
    							"ControlType": "TextBox",
    							"ControlCaption": "Route-To-Customer"
    						}
    					]
    				}
    			}
    		},
    		"DETAIL": {
    			"OrderPortalGridParmCollection": {
    				"OrderPortalGridParms": {
    					"OrderPortalGridParm": [
    						{
    							"pkeys": "ordnum,client_id,wh_id",
    							"service": "listOrders",
    							"ColumnCollection": {
    								"columns": {
    									"column": [
    										{
    											"name": "ordnum",
    											"caption": "Order Number",
    											"tooltip": "Order Number",
    											"position": "10",
    											"width": "200",
    											"mobileField": "Title"
    										},
    										{
    											"name": "cust_ref",
    											"caption": "Customer PO Number",
    											"tooltip": "Customer PO Number",
    											"position": "20",
    											"width": "200",
    											"mobileField": "Body"
    										},
    										{
    											"name": "stcust",
    											"caption": "Ship-To Customer",
    											"position": "30",
    											"width": "170",
    											"mobileField": "Body"
    										},
    										{
    											"name": "rtcust",
    											"caption": "Route-To Customer",
    											"position": "40",
    											"width": "170",
    											"mobileField": "Body"
    										},
    										{
    											"name": "btcust",
    											"caption": "Bill-To Customer",
    											"position": "50",
    											"width": "170",
    											"mobileField": "Body"
    										},
    										{
    											"name": "wh_id",
    											"caption": "Warehouse",
    											"position": "60",
    											"width": "150"
    										},
    										{
    											"name": "client_id",
    											"caption": "Client",
    											"position": "70",
    											"width": "150"
    										},
    										{
    											"name": "ordtyp",
    											"caption": "Order Type",
    											"position": "80",
    											"width": "250"
    										}
    									]
    								},
    								"strategy": "exclusive"
    							}
    						},
    						{
    							"pkeys": "ordnum",
    							"service": "listOrderLines",
    							"parent_grid": "listOrders",
    							"ColumnCollection": {
    								"columns": {
    									"column": [
    										{
    											"name": "client_id",
    											"caption": "Client",
    											"tooltip": "Client ID",
    											"position": "10",
    											"width": "100"
    										},
    										{
    											"name": "ordnum",
    											"caption": "Order Number",
    											"position": "20",
    											"width": "150"
    										},
    										{
    											"name": "ordlin",
    											"caption": "Order Line",
    											"position": "30",
    											"width": "70"
    										},
    										{
    											"name": "ordsln",
    											"caption": "Order Sub-Line",
    											"position": "40",
    											"width": "70"
    										},
    										{
    											"name": "wh_id",
    											"caption": "Warehouse",
    											"position": "50",
    											"width": "80"
    										},
    										{
    											"name": "prt_client_id",
    											"caption": "Item Client ID",
    											"position": "60",
    											"width": "150"
    										},
    										{
    											"name": "prtnum",
    											"caption": "Item Number",
    											"position": "70",
    											"width": "150"
    										},
    										{
    											"name": "prt_desc",
    											"caption": "Item Description",
    											"position": "80",
    											"width": "350"
    										},
    										{
    											"name": "ordqty",
    											"caption": "Ordered Quantity",
    											"position": "90",
    											"width": "100"
    										},
    										{
    											"name": "shpqty",
    											"caption": "Shipped Quantity",
    											"position": "100",
    											"width": "100"
    										},
    										{
    											"name": "carcod",
    											"caption": "Carrier",
    											"position": "110",
    											"width": "150"
    										},
    										{
    											"name": "srvlvl",
    											"caption": "Service Level",
    											"position": "120",
    											"width": "150"
    										},
    										{
    											"name": "entdte",
    											"caption": "Date Entered",
    											"position": "130",
    											"width": "200",
    											"dataType": "System.DateTime"
    										},
    										{
    											"name": "early_shpdte",
    											"caption": "Early Ship Date",
    											"position": "140",
    											"width": "200"
    										},
    										{
    											"name": "late_shpdte",
    											"caption": "Late Ship Date",
    											"position": "150",
    											"width": "200"
    										},
    										{
    											"name": "early_dlvdte",
    											"caption": "Early Delivery Date",
    											"position": "160",
    											"width": "200"
    										},
    										{
    											"name": "late_dlvdte",
    											"caption": "Late Delivery Date",
    											"position": "170",
    											"width": "200"
    										}
    									]
    								},
    								"strategy": "exclusive"
    							}
    						}
    					]
    				}
    			},
    			"Containers": {
    				"Container": {
    					"panel": "",
    					"Rows": {
    						"Row": {
    							"Columns": {
    								"Column": {
    									"widget": {
    										"panel": {
    											"title": "Grid container",
    											"collapse": "true",
    											"close": "true"
    										},
    										"kendoGridWidget": {
    											"pkeys": "ordnum",
    											"GridActions": {
    												"GridAction": [
    													{
    														"mode": "excel",
    														"caption": "Export to Excel"
    													},
    													{
    														"mode": "csv",
    														"caption": "Export to CSV"
    													}
    												]
    											},
    											"GridColumnCollection": {
    												"GridColumns": {
    													"GridColumn": [
    														{
    															"name": "ordnum",
    															"caption": "Order Number",
    															"width": "200",
    															"editable": "false"
    														},
    														{
    															"name": "cust_ref",
    															"caption": "Customer PO Number",
    															"width": "200",
    															"editable": "false"
    														},
    														{
    															"name": "stcust",
    															"caption": "Ship-To Customer",
    															"width": "170",
    															"editable": "false"
    														},
    														{
    															"name": "rtcust",
    															"caption": "Route-To Customer",
    															"width": "170",
    															"editable": "false"
    														},
    														{
    															"name": "btcust",
    															"caption": "Bill-To Customer",
    															"width": "170",
    															"editable": "false"
    														},
    														{
    															"name": "wh_id",
    															"caption": "Warehouse",
    															"width": "150",
    															"editable": "false"
    														},
    														{
    															"name": "client_id",
    															"caption": "Client",
    															"width": "150",
    															"editable": "false"
    														},
    														{
    															"name": "ordtyp",
    															"caption": "Order Type",
    															"width": "250",
    															"editable": "true"
    														}
    													]
    												},
    												"strategy": "exclusive"
    											},
    											"Datasource": {
    												"name": "OrdersDatasource"
    											},
    											"widget": {
    												"kendoGridWidget": {
    													"pkeys": "ordnum",
    													"GridActions": {
    														"GridAction": {
    															"mode": "excel",
    															"caption": "Export to Excel"
    														}
    													},
    													"GridColumnCollection": {
    														"GridColumns": {
    															"GridColumn": [
    																{
    																	"name": "client_id",
    																	"caption": "Client",
    																	"tooltip": "Client ID",
    																	"width": "100",
    																	"editable": "false"
    																},
    																{
    																	"name": "ordnum",
    																	"caption": "Order Number",
    																	"width": "150",
    																	"editable": "false"
    																},
    																{
    																	"name": "ordlin",
    																	"caption": "Order Line",
    																	"width": "70",
    																	"editable": "false"
    																},
    																{
    																	"name": "ordsln",
    																	"caption": "Order Sub-Line",
    																	"width": "70",
    																	"editable": "false"
    																},
    																{
    																	"name": "wh_id",
    																	"caption": "Warehouse",
    																	"width": "80",
    																	"editable": "false"
    																},
    																{
    																	"name": "prt_client_id",
    																	"caption": "Item Client ID",
    																	"width": "150",
    																	"editable": "false"
    																},
    																{
    																	"name": "prtnum",
    																	"caption": "Item Number",
    																	"width": "150",
    																	"editable": "false"
    																},
    																{
    																	"name": "prt_desc",
    																	"caption": "Item Description",
    																	"width": "350",
    																	"editable": "false"
    																},
    																{
    																	"name": "ordqty",
    																	"caption": "Ordered Quantity",
    																	"width": "100",
    																	"editable": "false"
    																},
    																{
    																	"name": "shpqty",
    																	"caption": "Shipped Quantity",
    																	"width": "100",
    																	"editable": "false"
    																},
    																{
    																	"name": "carcod",
    																	"caption": "Carrier",
    																	"width": "150",
    																	"editable": "false"
    																},
    																{
    																	"name": "srvlvl",
    																	"caption": "Service Level",
    																	"width": "150",
    																	"editable": "false"
    																},
    																{
    																	"name": "entdte",
    																	"caption": "Date Entered",
    																	"width": "200",
    																	"dataType": "System.DateTime",
    																	"editable": "false"
    																},
    																{
    																	"name": "early_shpdte",
    																	"caption": "Early Ship Date",
    																	"width": "200",
    																	"editable": "false"
    																},
    																{
    																	"name": "late_shpdte",
    																	"caption": "Late Ship Date",
    																	"width": "200",
    																	"editable": "false"
    																},
    																{
    																	"name": "early_dlvdte",
    																	"caption": "Early Delivery Date",
    																	"width": "200",
    																	"editable": "false"
    																},
    																{
    																	"name": "late_dlvdte",
    																	"caption": "Late Delivery Date",
    																	"width": "200",
    																	"editable": "false"
    																}
    															]
    														},
    														"strategy": "exclusive"
    													},
    													"Datasource": {
    														"name": "OrderLinesDatasource"
    													}
    												},
    												"id": "orderLines"
    											}
    										},
    										"id": "orders"
    									},
    									"col_class": "col-md-12 col-sm-6 col-xs-12"
    								}
    							}
    						}
    					}
    				}
    			},
    			"Datasources": {
    				"Datasource": [
    					{
    						"Params": {
    							"Param": [
    								{
    									"name": "locale_id",
    									"value": "US_ENGLISH",
    									"type": "static"
    								},
    								{
    									"name": "colnam",
    									"value": "ordtyp",
    									"type": "static"
    								}
    							]
    						},
    						"name": "DescriptionsDatasource",
    						"type": "load",
    						"apiName": "cortex",
    						"uri": "/api/services/ssr/{app}/{instanceId}/listdescriptions",
    						"httpMethod": "get"
    					},
    					{
    						"Transformations": {
    							"Transformation": {
    								"datasourceName": "DescriptionsDatasource",
    								"sourceValueField": "ordtyp",
    								"targetDescField": "lngdsc",
    								"targetValueField": "colval"
    							}
    						},
    						"name": "OrdersDatasource",
    						"type": "onDemand",
    						"apiName": "cortex",
    						"uri": "/api/services/ssr/{app}/{instanceId}/listOrders",
    						"httpMethod": "get"
    					},
    					{
    						"name": "OrderLinesDatasource",
    						"type": "onDemand",
    						"apiName": "cortex",
    						"uri": "/api/services/ssr/{app}/{instanceId}/listOrderLines",
    						"httpMethod": "get"
    					},
    					{
    						"name": "IntelliOrdersDatasource",
    						"type": "onDemand",
    						"apiName": "cortex",
    						"uri": "/api/services/ssr/{app}/{instanceId}/listIntelliOrders",
    						"httpMethod": "get"
    					}
    				]
    			}
    		}
    	}
    };
    
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
 
    $scope.getDynPageConfiguration = function (dynPageName){
        $http.get("https://hkdnte214.asia.ad.flextronics.com:2872/api/configuration/dynpages/" + dynPageName)
        .then(function successCallback(response) {
            $rootScope.dynPage = response.data;
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