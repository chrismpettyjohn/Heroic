class List {
  constructor($http, $scope, $state) {
    'ngInject'
    $http.get('/api/rooms')
      .then(rooms => {
        $scope.rooms = rooms.data
      })
      .catch(error => {
        $state.go('errors.500')
      })
  }
}

class View {
  constructor($http, $scope, $state) {
    'ngInject'
    $http.get(`/api/rooms/${$state.params.id || 1}`)
      .then(room => {
        if (!room.data.error) {
          $scope.room = room.data
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