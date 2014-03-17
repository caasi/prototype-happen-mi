angular.module \mi []
  .controller \MiController <[$scope]> ++ ($scope) ->
    for people in data
      people.style = background-image: "url(#{people.img})"
    $scope.data = data
