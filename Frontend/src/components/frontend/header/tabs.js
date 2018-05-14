import Navigation from '../../../config/navigation.json'
class Controller
{
    constructor ($scope)
    {
        'ngInject'

        this.$onChanges = (change => {
          $scope.children = []

          angular.forEach(Navigation.navigation, ((item, key) => { 
            if (change.page.currentValue.name.indexOf(item.state) > -1) {
              angular.forEach(item.children, ((child, key) => {
                $scope.children.push(child)
              }))
            }
          }))

        })
    } 

}

const Component = {
  bindings    : {
    "page" : "<"
  },
  controller  : Controller,
  templateUrl: 'views/frontend/components/header/navigation/tabs.html'
}

export default Component
       