export default class Controller {
    constructor($scope, $http) {
        'ngInject'
        $http.get('/api/config/website')
            .then(config => {
                if (config.data.store_enabled=='false') {
                    $scope.store = false
                } else {
                    $scope.store = true
                }
            }) 
            .catch(error => {
                $state.go('errors.500')
            })
    }

}