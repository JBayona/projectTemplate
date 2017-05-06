'use strict';

/**
 * @ngdoc function
 * @name templateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the templateApp
 */
angular.module('templateApp')
  .controller('MainCtrl', ['$scope', 'demoApp', function ($scope, demoApp) {

  	$scope.response = [];
    
  	$scope.add = function(){
  		if($scope.description !== '' && $scope.description !== undefined){
  			demoApp.postDemoApp($scope.description).then(function(data){
		 		$scope.description = '';
		 		getTasks();
	 		});
  		}
	 };

	 $scope.deleteElement = function(id){
	 	demoApp.deleteElement(id).then(function(){
	 		getTasks();
	 	});
	 };

	 $scope.updateElement = function(id, field, value){
	 	demoApp.updateElement(id, field, value).then(function(){
	 		getTasks();
	 	});
	 };

	 var getTasks = function(){
	 	demoApp.getDemoApp().then(function(response){
	 		$scope.response = response.data;
	 		//We can use only one variable for the two tables, but we will split in two variables(complete, incomplete) tasks
	 		/*$scope.todoList.forEach(item => {
	 			if(item.complete) $scope.todoCompleted.push(item);
	 			else $scope.todoIncompleted.push(item);
	 		})
	 		console.log($scope.todoCompleted);
	 		console.log($scope.todoIncompleted);*/
	 	});
	 };

	 //Init routines
	 getTasks();

  }]);
