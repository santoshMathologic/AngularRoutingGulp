var app = angular.module("smartApp", [
	'ngRoute',
	'toaster',
	//'angular-confirm'
	]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'StudentCtrl'
		})
		.when('/viewStudents', {
			templateUrl: 'viewStudents.html',
			controller: 'StudentCtrl'
		}).when('/red', {
			templateUrl: 'red.html',
			controller: 'redCtrl'
			
		}).when('/green', {
			templateUrl: 'green.html',
			controller: 'greenCtrl',
			
		}).when('/blue', {
			templateUrl: 'blue.html',
			controller: 'blueCtrl'
			
		}).when('/customValidator', {
			templateUrl: 'customValidation.html',
			controller: 'customValidationCtrl'		
		})
		.otherwise({
			redirectTo: '/home'
		});
});
