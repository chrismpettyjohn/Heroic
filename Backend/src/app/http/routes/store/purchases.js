import Controller from '../../controller/store/purchases'
export default class Routes {

    constructor(http) {
        http.post('/api/auth/store/purchases', Controller.create)
    }

}