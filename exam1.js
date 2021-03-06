var app1 = angular.module('app1', []);

app1.controller('gListCtrl', function($scope) {
	$scope.groceries = [
		{item: "Tomatoes", purchased: false},
		{item: "Potatoes", purchased: false},
		{item: "Bread", purchased: false},
		{item: "Hummus", purchased: false}
	];

	$scope.addItem = function(newItem) {
		if(!(newItem == undefined || newItem === "")){
			$scope.groceries.push({item: newItem, purchased: false});
			$scope.missingNewItemError = "";
		} else {
			$scope.missingNewItemError = "Please Enter an Item";
		}
	};

});