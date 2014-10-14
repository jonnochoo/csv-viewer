(function(){

  'use strict';

  angular.module('app')
    .controller('csvController', controller);

  function controller($scope){
    var vm = this;

    vm.csv = "";
    vm.viewType = "raw";

    vm.showRaw = function(){
      vm.viewType = "raw";
    };

    vm.showData = function(){
      vm.viewType = "data";
    };

    $scope.$watch('csv', function(val){
      if(val){
        var results = Papa.parse(val);

        if(results){
          vm.rows = results.data;
        }
      }
      
    })
  };

})();