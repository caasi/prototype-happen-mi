(function(){
  var data, $window, $container, $menu, calcContainerSize;
  data = [
    {
      img: 'img/steve.jpg',
      title: 'Steve',
      desc: 'A man who lives in a block world.'
    }, {
      img: 'img/steve.jpg',
      title: 'Another Steve',
      desc: 'Well, Steve again.'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }, {
      img: 'img/steve.jpg'
    }
  ];
  $window = $(window);
  $container = $('#container');
  $menu = $('#menu');
  (calcContainerSize = function(){
    return $container.height($window.height() - $menu.height());
  })();
  $window.resize(calcContainerSize);
  angular.module('mi', ['ui.router']).config(['$stateProvider'].concat(function($stateProvider){
    return $stateProvider.state('home', {
      url: '/'
    }).state('people', {
      url: '/:id'
    });
  })).controller('MiController', ['$scope'].concat(function($scope){
    var i$, ref$, len$, people;
    for (i$ = 0, len$ = (ref$ = data).length; i$ < len$; ++i$) {
      people = ref$[i$];
      people.style = {
        backgroundImage: "url(" + people.img + ")"
      };
    }
    return $scope.data = data;
  }));
}).call(this);
