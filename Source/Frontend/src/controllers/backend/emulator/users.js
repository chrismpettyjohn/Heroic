class Search {

    constructor($http, $scope, $state) {
        'ngInject'
        $scope.search = () => {
            $http.get(`/api/users/user/${$scope.username}`)
                .then(user => {
                    if (!user.data.error) {
                        $state.go('admin.emulator.users.view', {
                            username : $scope.username
                        })
                    } else {
                        $state.go('admin.emulator.users.search', {
                            message: {
                                type: 'failure',
                                text: 'That user does not exist'
                            }
                        }, {
                            reload : true
                        })
                    }
                })
                .catch(error => {
                    $state.go('admin.emulator.users.search', {
                        message: {
                            type: 'failure',
                            text: 'That user does not exist'
                        }
                    }, {
                        reload : true
                    })
                })
        }
    }
}

class View {

    constructor($http, $scope, $state) {
        'ngInject' 
        $http.get(`/api/users/user/${$state.params.username}`)
            .then(user => {
                if (!user.data.error) {
                    $scope.user = user.data
                } else {
                    $state.go('admin.emulator.users.search', {
                        message: {
                            type: 'failure',
                            text: 'That user does not exist'
                        }
                    }, {
                        reload : true
                    })
                }
            })
            .catch(error => {
                $state.go('admin.emulator.users.search', {
                    message: {
                        type: 'failure',
                        text: 'That user does not exist'
                    }
                }, {
                    reload : true
                })
            })
    }
}

module.exports = {
    Search,
    View,
}