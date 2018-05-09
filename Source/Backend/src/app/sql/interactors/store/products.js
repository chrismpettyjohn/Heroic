import Model from '../../models/store/products'
export default class Interactor {

    static async create(data) {
        try {
            return await new Model(data).save()
        } catch (error) {
            throw new Error(error)
        }
    }

    static async read(id) {
        try {
            if (id) {
                await Interactor.exists(id)

                return await Model.where('id', id).fetch({
                    columns: ['id', 'title', 'content', 'price', 'rank_id', 'boost_credits', 'boost_pixels', 'boost_points'],
                    withRelated: ['rank']
                }) 
            } else {
                return Model.query('orderBy', 'price', 'ASC').fetchAll({
                    columns: ['id', 'title', 'content', 'price', 'rank_id', 'boost_credits', 'boost_pixels', 'boost_points'],
                    withRelated: ['rank']
                })
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    static async update(data) {
        try {
            await Interactor.exists(data.id)
            await new Model(data).save()
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    static async delete(id) {
        try {
            await Interactor.exists(id)
            await Model.where('id', id).destroy()
            return true
        } catch (error) {
            throw new Error(error)
        }
    }

    // Other 
    static async exists(id) {
        try {
            if (id) {
                const item = await Model.where('id', id).fetch({
                    columns: ['id']
                })
                if (item) {
                    return true
                } else {
                    throw new Error('RETURN: Item does not exist')
                }
            } else {
                throw new Error('RETURN: Item ID has not been defined')
            }
        } catch (error) {
            throw new Error(error)
        }
    }

}