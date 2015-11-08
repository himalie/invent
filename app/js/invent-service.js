angular.module('invent.controllers', [])

.factory('InventFactory', ['$http', '$rootScope','INVENT_WEBSER_URL', function($http, $rootScope, INVENT_WEBSER_URL) {

	var urlBase = INVENT_WEBSER_URL + '/InventoryPart';
	var InventoryPart = {};
	InventoryPart.allParts = {};
	
	InventoryPart.getAllParts = function(){
        return $http.get(urlBase) 
        .success(function(data, status, headers, config) {
                InventoryPart.allParts = data.data;
              }).
              error(function (data, status, headers, config) {
                InventoryPart.allParts = null;
                //$scope.error = data.data;
                console.log('error: ' + data);
      });
    };

  return InventoryPart;
}]);