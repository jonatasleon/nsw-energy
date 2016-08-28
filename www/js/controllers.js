angular.module('app.controllers', [])

.controller('historicoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])

.controller('homeCtrl',['$scope','$stateParams',
	function ($scope, $stateParams) {
		$scope.consumo=00,00;
		$scope.energia=000;
	}])


.controller('pontosCtrl',['$scope','Api','$stateParams','$timeout',	function ($scope, Api,$stateParams,$timeout) {
	var baseState;

	Api.getApi().then(function(result){
		$scope.ponto = angular.fromJson(result.data);
		console.log($scope.ponto.corrente);
	})
	Api.getState().then(function(data) {
		console.log(data.data);
		$scope.state = data.data.split("=")[1];
		baseState = $scope.state;
	})


	$scope.$watch('state', function(newVal, oldVal) {
		if (newVal > baseState + 15 || newVal < baseState - 15 || newVal === 0 || newVal === 255)
			Api.setState(baseState = newVal).then(function(data){});
		console.log('state is now '+newVal);

	});

	$scope.setLevelText = function(rangeValue) {
		console.log('range value has changed to :'+$scope.state);
		$scope.testvariable = $scope.state;
	}

}

])