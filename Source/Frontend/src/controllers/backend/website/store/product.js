class Index {

    constructor($http, $scope, $state) {
        'ngInject'
        $http.get('/api/ranks')
            .then(ranks => {
                $scope.ranks = []
                ranks.data.forEach(rank => {
                    $scope.ranks.push({
                        id: rank.id,
                        rank_name: rank.rank_name,
                        badge : rank.badge
                    })
                })
            }) 
            .catch(error => {
                $state.go('errors.500')
            })
    }
}
class Create {

    constructor($http, $scope, $state) {
        'ngInject'

        $scope.product = {}

        $scope.create = () => {
            $http.post('/api/auth/admin/store/products', $scope.product)
                .then(msg => {
                    $state.go('admin.website.store.product.list', {
                        message: {
                            type: 'neutral',
                            text: 'Your changes have been saved'
                        }
                    }, {
                        reload: true
                    })
                })
                .catch(error => {
                    $state.go('errors.500')
                })
        }
    }
}

class List {

    constructor($http, $scope, $state) {
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

    constructor($http, $scope, $state) {
        'ngInject'
        $http.get(`/api/store/products/${$state.params.id || 0}`)
            .then(product => {
                $scope.product = product.data
                console.log(product.data)
            })
            .catch(error => {
                $state.go('admin.website.store.product.list')
            })
    }
}

class Update {
    constructor($http, $scope, $state) {
        'ngInject'
        $http.patch(`/api/auth/admin/store/products/${$state.params.id}`, $state.params.product)
            .then(msg => {
                $state.go('admin.website.store.product.view', {
                    id: $state.params.product.id,
                    message: {
                        type: 'neutral',
                        text: 'Your changes have been saved'
                    }
                }, {
                    reload: true
                })
            })
            .catch(error => {
                $state.go('admin.website.store.product.list')
            })
    }
}

class Delete {
    constructor($http, $scope, $state) {
        'ngInject'
        $http.delete(`/api/auth/admin/store/products/${$state.params.id}`)
            .then(msg => {
                $state.go('admin.website.store.product.list', {
                    message: {
                        type: 'neutral',
                        text: 'The subscription has been removed'
                    }
                }, {
                    reload: true
                })
            })
            .catch(error => {
                $state.go('admin.website.store.product.list')
            })
    }
}

module.exports = {
    Index,
    Create,
    Update,
    List,
    View,
    Delete
}