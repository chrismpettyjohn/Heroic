import Group from '@/modules/user/permission/service/group'

class Admin {

    static async validate (request, response, next) {
        try {

            let group = await Group.view(request.user.rank)

            if (group.rank_type === 'admin') {
                next()
            } else {
                throw new Error('Rank not allowed')
            }


        } catch (e) {
            response.status(403).send()
        }
    }

}

export default Token