angular.module('smartApp')
    .directive('userPlan', ['$compile', function($compile) {
        return {
            restrict : 'E',   
			replace : true,  
            templateUrl: 'ng/directives/dashboard/userPlan/userPlan.tmpl.html',
            controller: function($scope, $state, $http, $log, $q, $timeout, $window) {

                $scope.userPlans = [
                {name:"plan001"},
                {name:"plan002"},
                {name:"plan003"},
                {name:"plan004"},
                {name:"plan005"}


                ];
                
             
               
            }

        };
    }]);