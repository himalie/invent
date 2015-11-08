// create the controller and inject Angular's $scope
    inventApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = '';
    });

    inventApp.controller('aboutController', function($scope, InventFactory) {

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

    inventApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });

    inventApp.controller('partsController', function($scope) {
        $scope.message = 'This is the parts controller.';
    });
