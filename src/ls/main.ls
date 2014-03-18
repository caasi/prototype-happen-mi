# caculate the size of main container,
# hate things like this.
$window    = $ window
$container = $ \#container
$menu      = $ \#menu

do calc-container-size = ->
  $container.height $window.height! - $menu.height!
$window.resize calc-container-size

# do angular things
angular.module \mi <[ui.router]>
  .config <[$stateProvider]> ++ ($stateProvider) ->
    $stateProvider
      .state \home do
        url: '/'
      .state \people do
        url: '/:id'
  .controller \MiController <[$scope]> ++ ($scope) ->
    for people in data
      people.style = background-image: "url(#{people.img})"
    $scope.data = data
