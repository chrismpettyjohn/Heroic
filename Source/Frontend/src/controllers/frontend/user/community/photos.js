class List {
  constructor($http, $scope, $state) {
    'ngInject'
    $http.get('/api/photos')
      .then(photos => {
        $scope.photos = photos.data
      })
      .catch(error => {
        $state.go('errors.500')
      })
  }
}

module.exports = {
  List
}