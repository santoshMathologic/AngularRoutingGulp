'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('smartApp')
    .directive('state',function() {
    	return {
  		templateUrl:'ng/directives/state/state.tmpl.html',
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'comments': '@',
        'number': '@',
        'name': '@',
        'panelcolour': '@',
        'details':'@',
        'type':'@',
        'goto':'@'
  		}
  		
  	}
  });
