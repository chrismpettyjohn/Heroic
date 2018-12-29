import Service from '@/modules/user/generic/service/user'

class Auth {

    static async update (request, response) {
        try {
            let user = request.body.user
            user.id = request.user.id
            user.username = request.user.username
            await Service.update(user)
            response.status(200).send()
        } catch (e) {
            response.status(500).send()
        }
    }

}

export default Auth