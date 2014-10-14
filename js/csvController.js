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
      console.log(vm.viewType);
      vm.viewType = "data";
    };

    $scope.$watch('csv', function(val){
      var data = new CSV(val + "\r\n").parse();
      vm.rows = data;
      
    })
  };

})();