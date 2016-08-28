function Hello($scope, $http) {
	$http.get('http://200.235.93.142:3000/').
	sucess(function (data) {
		$scope.greeting=data;
	});
}