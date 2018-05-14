import Model from '../../models/store/purchases'
export default class Interactor {

    static async create (data) {
        try {
            return new Model(data).save()
        }
        catch (error) {
            throw new Error(error)
        }
    }

}