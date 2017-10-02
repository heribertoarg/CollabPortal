angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.searchresults', {
        views: {
            app: {
                controller: 'app_searchresults',
                templateProvider: function (app) {
                    return app.templateProvider('app.searchresults');
                }
            }
        }
    }).state('app.searchcriteria', {
        views: {
            app: {
                controller: 'app_searchcriteria',
                templateProvider: function (app) {
                    return app.templateProvider('app.searchcriteria');
                }
            }
        }
    }).state('app.landingpage', {
        views: {
            app: {
                controller: 'app_landingpage',
                templateProvider: function (app) {
                    return app.templateProvider('app.landingpage');
                }
            }
        }
    });
});