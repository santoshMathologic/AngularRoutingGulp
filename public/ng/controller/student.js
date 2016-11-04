
angular.module('smartApp').controller('StudentCtrl', function($scope,toaster) {
	
     $scope.students = [];
    $scope.getstudents =function(){
        $scope.students = [
		{name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
		{name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
		{name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
        {name: 'Mark Waugh', city:'New York', email:"abc@gmail.com"},
	];


    }
    $scope.getstudents();

    $scope.remove = function(student){
            $scope.students.splice($scope.students.indexOf(student),1); 
             toaster
                    .pop({
                        type: 'success',
                        title: 'Removed Succcessfully',
                        body: 'Removed Succcessfully.'
                    });

    }

	$scope.message = "Click on the hyper link to view the students list.";
});