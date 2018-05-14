export default class Controller
{

  constructor(SessionService, $http, $state, $scope)
  {
      'ngInject'
      $scope.error  = false
      $scope.user   = {
        username : '',
        password : ''
      }
      $scope.login  = () => {
        if ($scope.user.username=='' && $scope.user.password=='') {
          $scope.error = {
            username : true,
            password : true
          }
        } else if ($scope.user.username=='') {
          $scope.error = {
            username : true,
          }
        } else if ($scope.user.password=='') {
          $scope.error = {
            password : true
          }
        } else {
          $scope.error = false
          $scope.push()
        }
      }
      $scope.push   = () => {
        $http.post(`/api/users/session/${$scope.user}`, $scope.user)
          .then (message => {
            if (message.data.error) {

              switch (message.data.error) {

                case "That user does not exist":
                  $scope.error = {
                    username : true
                  }
                break; 

                case "That's not the right password":
                  $scope.error = {
                    password : true
                  }
                break;

                default:
                  $scope.error = false
                break;
              }
            } else {
              SessionService.create(message.data, $scope.user.username)
                .then (success => {
                  $state.go('user.home.me')
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
