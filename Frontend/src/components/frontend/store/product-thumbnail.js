class Controller {
    constructor($scope) {
        'ngInject'
        $scope.product = $scope.$parent.product
    } 

}

const Component = {
    controller: Controller,
    bindings    : {
        "package" : "<"
      },
    templateUrl: 'views/frontend/components/store/product/thumbnail.html'
}
 
export default Component   