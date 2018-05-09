export default class Settings {
  constructor($http, $state, $rootScope, $localStorage, $interval) {
    'ngInject'
    // Website Settings

    const fetch_web = () => {
      $http.get('/api/config/website')
        .then(website => {
          $rootScope.website = website.data
          $localStorage.website = website.data
        })
        .catch(error => {
          $state.go('errors.500')
        })
    }

    // Online Users
    const fetch_users = () => {
      $http.get('/api/users/online/count')
        .then(users => {
          $rootScope.website.online = users.data
        })
        .catch(error => {
          $state.go('errors.500')
        })
    }

    fetch_web()
    fetch_users()

    $interval(fetch_users, 2500)
    $interval(fetch_web, 10000)
  }


}