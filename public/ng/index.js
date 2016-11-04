
var initInjector = angular.injector(['ng']);
var $http = initInjector.get('$http');


var app = angular.module('smartApp', ['ngCookies','oc.lazyLoad','ui.router' ]);


app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
        


        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });

       


        $httpProvider.defaults.withCredentials = true;

        $urlRouterProvider.otherwise('/home/dashboard');
        $stateProvider
            .state('home', {
                templateUrl: 'ng/directives/home/home.directive.html',
                url: '/home',
                resolve: {
                    loadMyDirectives: function($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'smartApp',
                                files: [
                                    'ng/directives/home/home.js'
                                ]
                            })
                    }
                }
            })
            .state('home.dashboard',
            {
                template: '<dashboard></dashboard>',
                url: '/dashboard',
                resolve: {
                    loadMyDirectives: function($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'smartApp',
                                files: [
                                    'ng/directives/dashboard/dashboard.js',
                                    //'ng/directives/dashboard/commonHeader/commonHeader.js',
                                    //'ng/directives/dashboard/commonFooter/commonFooter.js',
                                    //'ng/directives/dashboard/sidebar/sidebar.js',
                                    //'ng/directives/dashboard/content/content.js'

                                ]
                            })
                    }
                }
            })
           

           

           



       
          
    }]);