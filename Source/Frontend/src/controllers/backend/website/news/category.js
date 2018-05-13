class Create {
    constructor($http, $state) {
        'ngInject'
        $http.post('/api/auth/mod/categories', $state.params.category)
            .then(msg => {
                if (!msg.data.error) {
                    $scope.go('admin.website.news.category.list', {
                        message: {
                            type: 'neutral',
                            text: 'Your changes have been saved'
                        }
                    }, {
                        reload: true
                    })
                } else {
                    $scope.go('admin.website.news.category.list', {
                        message: {
                            type: 'failure',
                            text: 'Your changes could not be saved'
                        }
                    }, {
                        reload: true
                    })
                }
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }
}

class List {
    constructor($http, $scope, $state) {
        'ngInject'
        $http.get('/api/news/categories')
            .then(categories => {
                $scope.categories = categories.data
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }
}

class View {
    constructor($http, $scope, $state) {
        'ngInject'
        $http.get(`/api/news/categories/${$state.params.id || 0}`)
            .then(category => {
                if (!category.data.error) {
                    $scope.category = category.data
                } else {
                    $state.go('admin.website.news.category.list')
                }
            })
            .catch(error => {
                $state.go('errors.500')
            })


    }
}

class Update {
    constructor($http, $scope, $state) {
        $http.patch(`/api/auth/mod/categories/${$scope.category.id}`, $scope.category)
            .then(msg => {
                if (!msg.data.error) {
                    $scope.go('admin.website.news.category.view', {
                        id: $state.params.category.id,
                        message: {
                            type: 'neutral',
                            text: 'Your changes have been saved'
                        }
                    }, {
                        reload: true
                    })
                } else {
                    $scope.go('admin.website.news.category.view', {
                        id: $state.params.category.id,
                        message: {
                            type: 'failure',
                            text: 'Your changes could not be saved'
                        }
                    }, {
                        reload: true
                    })
                }
            })
            .catch(error => {
                $state.go('errors.500')
            })
    }
}

class Delete {
    constructor($http, $scope, $state) {
        $http.delete(`/api/auth/mod/categories/${state.params.id}`)
            .then(success => {
                $scope.go('admin.website.news.category.list', {
                    message: {
                        type: 'failure',
                        text: 'Your changes could not be saved'
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

module.exports = {
    Create,
    List,
    View,
    Update,
    Delete
}