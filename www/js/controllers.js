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

.controller('pontosCtrl',['$scope','$stateParams',
	function ($scope,$stateParams) {
		$scope.ponto ="Tomada";
		$scope.valor="";
		$scope.ligar=false;
	}])
.controller('helloCtrl',['$scope','$http',
	function ($scope, $http) {
		$http.get('http://200.235.93.142:3000/api/leituras/last').
		success(function (data) {
			console.log(data);
			$scope.greeting=data;
		});
	}
	])