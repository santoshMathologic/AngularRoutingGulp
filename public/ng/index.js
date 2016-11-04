
var initInjector = angular.injector(['ng']);
var $http = initInjector.get('$http');


var app = angular.module('smartApp', [
    'ngCookies',
    'oc.lazyLoad',
  	'toaster',
    'ui.router' 
    ]);


app.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {
        
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
        });

       


       // $httpProvider.defaults.withCredentials = true;

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
                               
                                ]
                            })
                    }
                }
            }).state('home.login', {
                templateUrl: 'ng/directives/auth/login/login.directive.html',
                url: '/login',
                resolve: {
                    loadMyDirectives: function($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'smartApp',
                                files: [
                                    'ng/directives/auth/login/login.js'
                                ]
                            })
                    }
                }
            }).state('home.dashboard.user',
            {
                templateUrl: 'ng/directives/dashboard/user/user.directive.html',
                url: '/user',
                resolve: {
                    loadMyDirectives: function($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'smartApp',
                                files: [
                                    'ng/directives/dashboard/user/user.js'

                                ]
                            })
                    }
                }
            })
           
          
    }]);