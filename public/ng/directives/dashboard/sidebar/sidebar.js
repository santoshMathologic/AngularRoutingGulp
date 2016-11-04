angular.module('smartApp')
    .directive('sideBar', ['$compile', function($compile) {
        return {
            restrict: 'E',
            templateUrl: 'ng/directives/dashboard/sidebar/sidebar.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
                
             
               
            }

        };
    }]);