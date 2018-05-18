export default class Controller {
  constructor($scope, $state, $http) {
    'ngInject'
    $scope.message = $state.params.message
    // Check latest release
    $http.get('https://api.github.com/repos/chrismpettyjohn/heroic-standalone/releases', {
        external: true
      })
      .then(github => {
        github = github.data[0]
        $http.get('/api/config/heroic', {
            external: true
          })
          .then(heroic => {
            if (heroic.data.version < github.tag_name) {
              $scope.update = {
                type: 'failure',
                text: `A new version of Heroic is available - ${github.tag_name} <a class="Button--alert ember-view" href="${github.html_url}"><strong>Download Today</strong></a>`,
                css: 'color:white;'
              }
            }

            if (github.prerelease == true) {
              $scope.update = {
                type: 'neutralGrey',
                text: `You are running a <strong>beta</strong> version of Heroic which may be dangerous in a live environment!`
              }
            }
          })
      })
  }
}