(function(){
  var data, $window, $container, $menu, $modal, calcContainerSize;
  data = [
    {
      image: 'img/steve.jpg',
      title: 'Steve',
      content: 'A man who lives in a block world.'
    }, {
      image: 'img/steve.jpg',
      title: 'Another Steve',
      content: 'Well, Steve again.'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }, {
      image: 'img/steve.jpg'
    }
  ];
  $window = $(window);
  $container = $('#container');
  $menu = $('#menu');
  $modal = $('#modal');
  $modal.modal('setting', {
    detachable: false
  });
  (calcContainerSize = function(){
    return $container.height($window.height() - $menu.height());
  })();
  $window.resize(calcContainerSize);
  angular.module('mi', ['ui.router']).config(['$stateProvider'].concat(function($stateProvider){
    return $stateProvider.state('home', {
      url: '/'
    }).state('people', {
      url: '/:id',
      templateUrl: '/people.html',
      controller: ['$scope', '$state', '$stateParams'].concat(function($scope, $state, arg$){
        var id;
        id = arg$.id;
        import$($scope, data[+id]);
        return $('#modal').modal('setting', {
          onHide: function(){
            return $state.go('home');
          }
        }).modal('show');
      })
    }).state('about', {
      url: '/about/'
    });
  })).controller('MiController', ['$scope'].concat(function($scope){
    var i$, ref$, len$, people;
    for (i$ = 0, len$ = (ref$ = data).length; i$ < len$; ++i$) {
      people = ref$[i$];
      people.style = {
        backgroundImage: "url(" + people.image + ")"
      };
    }
    return $scope.data = data;
  }));
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
