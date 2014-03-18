# caculate the size of main container,
# hate things like this.
$window    = $ window
$container = $ \#container
$menu      = $ \#menu
$modal     = $ \#modal

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
        templateUrl: '/people.html'
        controller: <[$scope $state $stateParams]> ++ ($scope, $state, {id}) ->
          $scope <<< data[+id]
          console.log $scope
          $modal
            .modal \setting do
              # onHidden is not working
              onHide: ->
                $state.go \home
            .modal \show
      .state \about do
        url: '/about/'
  .controller \MiController <[$scope]> ++ ($scope) ->
    for people in data
      people.style = background-image: "url(#{people.image})"
    $scope.data = data
