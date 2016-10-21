function MainController($scope){
  $scope.contact = {
    name: 'Hirally',
    phone: '01234567890'
  };

  $scope.year = '2017';
}

angular
  .module('app')
  .controller('MainController', MainController);
