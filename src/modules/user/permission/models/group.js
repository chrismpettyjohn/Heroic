import Model from '@/database/model'

class Group extends Model {

    static get tableName () {
        return 'permissions_groups'
    }

    static get visible () {
        return [
            'id',
            'rank_name'
        ]
    }

}

export default Group