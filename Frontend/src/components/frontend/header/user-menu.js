class Controller
{
  constructor($scope)
  {
    'ngInject' 
    $scope.status = false
    $scope.toggle = () => {
      $scope.status = !$scope.status
    }
  }
}

const Component = {
  controller : Controller,
  templateUrl: 'views/frontend/components/header/user/menu.html'
}

export default Component
 