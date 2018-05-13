import Navigation from '../../../config/navigation.json'
class Controller
{
    constructor ($scope, $rootScope, $localStorage)
    {
        'ngInject'
        $scope.parents = []
        angular.forEach(Navigation.navigation, ((item, key) => {

          if (item.name == 'current_username') item.name = $localStorage.session.username

          $scope.parents.push({
            name : item.name,
            icon  : item.icon,
            state : item.state,
            url   : item.url
          })
 
        })) 
    }

}

const Component = {
  controller  : Controller,
  templateUrl: 'views/frontend/components/header/navigation/parent.html'
}

export default Component
