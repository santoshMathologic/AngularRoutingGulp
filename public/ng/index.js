
var initInjector = angular.injector(['ng']);
var $http = initInjector.get('$http');


var app = angular.module('smartApp', [
    'ngCookies',
    'oc.lazyLoad',
    'toaster',
    'ngRoute',
    'ui.router'
]);


app.config(['$routeProvider', '$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$httpProvider',
    function ($routeProvider, $stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $httpProvider) {

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
                    loadMyDirectives: function ($ocLazyLoad) {
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
                templateUrl: 'ng/directives/dashboard/dashboard.directive.html',
                url: '/dashboard',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'smartApp',
                                files: [
                                    'ng/directives/dashboard/dashboard.js',
                                    'ng/directives/dashboard/sidebar/sidebar.js',
                                    'ng/directives/dashboard/header/header.js',
                                    'ng/directives/dashboard/footer/footer.js'
                                ]
                            })
                    }
                }
            }).state('home.login', {
                templateUrl: 'ng/directives/auth/login/login.directive.html',
                url: '/login',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
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
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'smartApp',
                                files: [
                                    'ng/directives/dashboard/user/user.js'

                                ]
                            })
                    }
                }
            }).state('home.dashboard.register',
            {
                templateUrl: 'ng/directives/dashboard/register/register.directive.html',
                url: '/register',
                resolve: {
                    loadMyDirectives: function ($ocLazyLoad) {
                        return $ocLazyLoad.load(
                            {
                                name: 'smartApp',
                                files: [
                                    'ng/directives/dashboard/register/register.js'

                                ]
                            })
                    }
                }
            })

        $routeProvider
            .when('/red', {
                templateUrl: 'red.html',


            }).when('/green', {
                templateUrl: 'green.html',


            }).when('/blue', {
                templateUrl: 'blue.html',

            })


    }]);