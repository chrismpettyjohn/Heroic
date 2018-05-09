class List {
  constructor($http, $scope, $state) {
    'ngInject'
    // Fetch Categories
    $http.get('/api/news/categories')
      .then(categories => {
        if (categories.data.error) {
          $state.go('errors.500')
        } else {
          $scope.categories = categories.data
        }
      })
      .catch(error => {
        $state.go('errors.500')
      })
    // Fetch Articles
    $http.get('/api/news/articles')
      .then(articles => {
        $scope.articles = articles.data
      })
      .catch(error => {
        $state.go('errors.500')
      })
    $scope.$watchCollection(() => {
      return $state.params
    }, () => {
      $scope.category = $state.params.id
    })
  }
}

class View {
  constructor($http, $scope, $state) {
    'ngInject'
    $http.get(`/api/news/categories/${$state.params.id || 1}`)
      .then(category => {
        if (!category.data.error) {
          $scope.category = category.data
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