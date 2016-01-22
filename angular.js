angular.module("mainModule", [])
angular.module("mainModule").controller("mainTroller", ["$scope", function($scope){

	$scope.popup = function(){
		$scope.hidden = true;
	}
	$scope.closebox = function(){
		$scope.hidden = false;
	}

}])