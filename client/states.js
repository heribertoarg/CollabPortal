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
    }).state('app.seachcriteria', {
        views: {
            app: {
                controller: 'app_seachcriteria',
                templateProvider: function (app) {
                    return app.templateProvider('app.seachcriteria');
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
    });
});