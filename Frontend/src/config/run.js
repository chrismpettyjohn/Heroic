export default function Run ($transitions, SettingsService, SessionService, $rootScope, $state)
{
  'ngInject'
  // All Routes
  $transitions.onStart({}, (transition) => {
    $rootScope.page = transition.to()
  })

  // Guests Only
  $transitions.onStart({ entering : 'guest' }, (transition) => {
    SessionService.validate()
      .then (validate => {
        $state.go('user.home.me')
      })
      .catch (error => {
        // Continue
      })
  })

  // Users Only
  $transitions.onStart({ entering : 'user' }, (transition) => {
    SessionService.validate()
    .then (validate => {
      // Continue
    })
    .catch (error => {
      $state.go('guest.login')
    })
  })   

  //Admin only
  $transitions.onStart({ entering : 'admin' }, (transition) => {
    SessionService.validate()
    .then (session => {
      if (session.rank.cms_admin=='0') {
        $state.go('user.home.me')
      }
    })
    .catch (error => {
      $state.go('guest.login')
    })
  })



 
}
