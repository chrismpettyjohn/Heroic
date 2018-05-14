class List {
    constructor($http, $scope, $state) {
        'ngInject'
        $http.get('/api/ranks')
            .then(ranks => {
                $scope.ranks = []
                ranks.data.forEach(r => {
                    if (r.cms_display_staff == 1) {
                        $scope.ranks.push(r)
                    }
                })

                if (!$state.params.id) {
                    $state.go('user.community.staff.view', {
                        id: $scope.ranks[0].id
                    })
                }
            })
            .catch(error => {
                console.log(error)
                $state.go('errors.500')
            })
        $scope.$watchCollection(() => {
            return $state.params
        }, () => {
            $scope.parent = $state.params.id
        })
    }
}

class View {
    constructor($http, $scope, $state) {
        'ngInject'
        $http.get(`/api/ranks/${$state.params.id || 0}`)
            .then(rank => {
                if (!rank.data.error) {
                    $scope.rank = rank.data
                } else {
                    $state.go('errors.400')
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