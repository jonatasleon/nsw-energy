angular.module('app.services', [])

.factory('Api', function($http){
	var base="http://200.235.93.142:3000/api";
	return{
		getApi:function () {
			return $http({
				url:base+'/leituras/last',
				method:'GET'
			})
		},
		getState:function(){
			return $http({
				url:base+"/pontos/state?SERIAL=1",
				method:'GET'
			})
		},
		sendState:function (estado) {
			return $http({
				url:base+"/pontos/state",
				method:'POST',
				data:{
					'SERIAL': '1',
					'ESTADO': estado
				}
			})
		}
	};
})
