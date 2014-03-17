(function(){
  var data;
  data = [
    {
      img: 'img/steve.jpg',
      title: 'Steve',
      desc: 'A man who lives in a block world.'
    }, {
      img: 'img/steve.jpg',
      title: 'Another Steve',
      desc: 'Well, Steve again.'
    }
  ];
  angular.module('mi', []).controller('MiController', ['$scope'].concat(function($scope){
    return $scope.data = data;
  }));
}).call(this);
