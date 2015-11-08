angular.module('myApp', [])


.controller('aboutController', function($scope, InventFactory) {

        $scope.parts = {};
        $scope.message = 'Look! I am an about page.';

        $scope.loadParts = function() {
            InventFactory.getAllParts().then(
                  function(data){            
                    $scope.parts = data.data;     
                     //alert($scope.parts);                           
                  },
                  function(){
                    // alert('error');
                });
        };
    });