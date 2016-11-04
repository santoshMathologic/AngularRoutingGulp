angular.module('smartApp')
    .directive('user', ['$compile', function($compile) {
        return {
            restrict : 'E',   
			replace : true,  
            templateUrl: 'ng/directives/dashboard/user/user.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {
                
             
               
            }

        };
    }]);