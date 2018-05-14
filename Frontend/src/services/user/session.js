export default class Session {

  constructor(JWTService, $http, $localStorage, $rootScope, $q, $state) {
    'ngInject'
    Session.$http = $http
    Session.$localStorage = $localStorage
    Session.$rootScope = $rootScope
    Session.$q = $q
    Session.$state = $state
  }


  create(token, username) {
    return Session.$q((resolve, reject) => {
      Session.$localStorage.token = token
      Session.$http.get(`/api/auth/users/session/${username}`)
        .then(session => {
          Session.$localStorage.session = session.data
          Session.$rootScope.session = session.data
          resolve()
        })
        .catch(error => {
          Session.$localStorage.$reset()
          Session.$rootScope.session = undefined
          return false
        })
    })
  }

  validate() {
    return Session.$q((resolve, reject) => {
      // Check for token 
      if (Session.$localStorage.token && Session.$localStorage.session) {
        Session.$http.get(`/api/auth/users/session/${Session.$localStorage.session.username}`)
          .then(session => {
            if (!session.data.error) {
              Session.$localStorage.session = session.data
              Session.$rootScope.session = session.data
              resolve(session.data)
            } else {
              if (session.data.error == 'banned') {
                Session.$state.go('errors.message', {
                  message: {
                    title: 'Account Banned',
                    content: 'You have been banned from our services for not following the rules.'
                  }
                })
              } else {
                reject('Session not found')
              }
            }
          })
          .catch(error => {
            Session.$localStorage.$reset()
            Session.$rootScope.session = undefined
            reject('Session error')
          })
      } else {
        Session.$localStorage.$reset()
        Session.$rootScope.session = undefined
        reject('Session not found')
      }
    })
  }

  delete() {
    Session.$localStorage.$reset()
    Session.$rootScope.session = undefined
    Session.$state.go('guest.login')
  }



}