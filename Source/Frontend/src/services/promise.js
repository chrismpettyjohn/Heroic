export default class Promise {
  constructor($q) {
    'ngInject'
    return {
      'requestError': function (rejection) {
        // handle same as below
      },

      'responseError': function (rejection) {
        if (canRecover(rejection)) {
          return responseOrNewPromise
        }
        return $q.reject(rejection)
      }
    }
  }

}