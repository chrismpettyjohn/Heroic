export default class Controller
{

  constructor(SessionService, $http, $state, $scope)
  {
      'ngInject'
      $scope.user     = { }
      $scope.errors   = { }
      $scope.check    = (type => {

        switch (type) {

          case 'username':
            $http.post(`/api/users/validate`, { data : $scope.user.username, type : 'username' })
              .then (message => {
                if (message.data.error) {
                  $scope.errors.username = message.data.error
                } else {
                  $scope.errors.username = undefined
                }
              })
          break;

          case 'email':
          $http.post(`/api/users/validate`, { data : $scope.user.email, type : 'email' })
            .then (message => {
              if (message.data.error) {
                $scope.errors.email = message.data.error
              } else {
                $scope.errors.email = undefined
              }
            })
          break;

          case 'password':
            // Compare Passwords
            if ($scope.user.password!=$scope.user.password_repeat) {
              $scope.errors.password_repeat = 'Your passwords must match'
            } else {
              $scope.errors.password_repeat = false
            }

            // Validate Security
            $http.post(`/api/users/validate`, { data : $scope.user.password, type : 'password' })
            .then (message => {
              if (message.data.error) {
                $scope.errors.password = message.data.error
              } else {
                $scope.errors.password= undefined
              }
            })
          break;

          case 'password_repeat':
            if ($scope.user.password!=$scope.user.password_repeat) {
              $scope.errors.password_repeat = 'Your passwords must match'
            } else {
              $scope.errors.password_repeat = undefined
            }
          break;

        }
      })
      $scope.join     = () => {
        $http.put(`/api/users/user/${$scope.user.username}`, $scope.user)
          .then (message => {
            if (message.data.error) {
              $scope.errors.master = message.data.error
            } else {
              $http.post(`/api/users/session/${$scope.user.username}`, $scope.user)
                .then (token => {
                  SessionService.create(token.data)
                    .then (success => {
                      $state.go('user.home.me')
                    })
                    .catch (error => {
                      $state.go('errors.500')
                    })
                })
                .catch (error => {
                  $state.go('errors.500')
                })
            }
          })
          .catch (error => {
            $state.go('errors.500')
          })
      }
  }

}
