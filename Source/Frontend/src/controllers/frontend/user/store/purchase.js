class Success {

    constructor($state, $scope, $localStorage, $http) {
        'ngInject'
        $scope.process = true
        let data = {
            user: $localStorage.session,
            product: $state.params.product,
            purchase: $state.params.purchase
        }
        $http.post('/api/auth/store/purchases', data)
            .then(msg => {
                $scope.process = false
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }

}

module.exports = {
    Success
}