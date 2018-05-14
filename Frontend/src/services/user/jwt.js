export default class JWT {
    constructor($injector, $location, $q, $localStorage) {
        'ngInject'

        this.request = (config) => {
            config.headers = config.headers || {}
            if ($localStorage.token) {
                config.headers['x-access-token'] = $localStorage.token
            }
            return config
        }

        this.requestError = (res) => {
            return $q.reject(res)
        }

        this.response = (res) => {
            return res || $q.when(res)
        }

        this.responseError = (res) => {
            return $q.reject(res)
        }
    }
}