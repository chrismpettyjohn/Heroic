import Controller from '../../controller/news/images'
export default class Routes {

    constructor (http) {
        http.get('/api/news/images', Controller.read)
    }
}