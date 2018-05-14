import Model from '../../models/user/rooms'
export default class Interactor {
    
    static async read (id) {
        try {
            if (id) {
                let room = await Model.where('id', id).fetch({ columns : ['id', 'name', 'description', 'owner_id'], withRelated : ['owner'] })
                if (room) {
                    return room
                } else {
                    throw new Error('RETURN: Room does not exist')
                }
            } else {
               return Model.query(qb => { qb.select('id', 'name', 'description', 'owner_id'); qb.orderByRaw('RAND()'); qb.limit(10); }).fetchAll({ withRelated : ['owner'] })
            }
        } catch (error) {
            throw new Error(error)
        }
    }

}