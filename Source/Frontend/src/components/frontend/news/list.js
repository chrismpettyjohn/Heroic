class Controller {
  constructor($scope, $http) {
    'ngInject'
    $http.get('/api/news/articles')
      .then(articles => {
        $scope.articles = articles.data.slice(0, 5)
      })
  }

}

const Component = {
  controller: Controller,
  templateUrl: 'views/frontend/components/news/list.html'
}

export default Component