angular.module \mi <[ui.router]>
  .config <[$stateProvider]> ++ ($stateProvider) ->
    $stateProvider
      .state \home do
        url: '/'
  .controller \MiController <[$scope]> ++ ($scope) ->
    for people in data
      people.style = background-image: "url(#{people.img})"
    $scope.data = data
