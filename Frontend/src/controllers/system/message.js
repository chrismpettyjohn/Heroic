export default class Controller {
    constructor($scope, $state) {
        'ngInject'
        $scope.message = $state.params.message
    }
}  