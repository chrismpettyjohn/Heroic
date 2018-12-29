import Model from '@/modules/user/permission/models/groups'

class Group {

    static async view (id) {
        try {
            let group = await Model.query().findById(id)
            if (group) {
                return Promise.resolve(group)
            } else {
                throw new Error('Group not found')
            }
        } catch (e) {
            return Promise.reject(e)
        }
    }

}

export default Group