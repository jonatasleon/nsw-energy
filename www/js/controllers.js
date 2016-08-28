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

.controller('detalhesCtrl',['$scope','$stateParams',
	function ($scope,$stateParams) {
		$scope.ponto ="Tomada";
		$scope.valor="";
}])