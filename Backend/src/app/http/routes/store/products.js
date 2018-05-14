import Controller from '../../controller/store/products'
export default class Routes {

    constructor(http) {
        http.post('/api/auth/admin/store/products', Controller.create)
        http.get('/api/store/products', Controller.read)
        http.get('/api/store/products/:id', Controller.read)
        http.patch('/api/auth/admin/store/products/:id', Controller.update)
        http.delete('/api/auth/admin/store/products/:id', Controller.delete)
    }

}