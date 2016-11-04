angular.module('smartApp')
    .directive('register', ['$compile', function($compile) {
        return {
            restrict : 'E',   
			replace : true,  
            templateUrl: 'ng/directives/dashboard/register/register.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
                
             
               
            }

        };
    }]);