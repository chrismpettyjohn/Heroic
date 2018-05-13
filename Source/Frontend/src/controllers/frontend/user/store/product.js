class List {

    constructor($scope, $http, $state) {
        'ngInject'
        $http.get('/api/store/products')
            .then(products => {
                $scope.products = products.data
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }

}

class View {

    constructor($scope, $http, $state) {
        'ngInject'
        $http.get(`/api/store/products/${$state.params.id || 0}`)
            .then(product => {
                if (!product.data.error) {
                    $scope.product = product.data
                } else {
                    $state.go('user.store.products.list')
                }
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }

}

module.exports = {
    List,
    View
}