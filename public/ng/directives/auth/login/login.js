angular.module('smartApp')
    .directive('login', ['$compile', function ($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/auth/login/login.tmpl.html',
            controller: function ($scope, $state, $window, $location) {


                $scope.userObject = {
                    username: "",
                    password: ""
                };

                $scope.doLogin = function () {

                    $state.go('home.dashboard.user');


                }




            }



        };
    }]);