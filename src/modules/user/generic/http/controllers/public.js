import Service from '@/modules/user/generic/service/user'

class Public {

  static async view (request, response) {
    try {
      let user = await Service.view(request.params.username)
      response.send(user)
    } catch (e) {
      response.status(400).send(e)
    }
  }

  static async list (request, response) {
    response.send('list here')
  }

}

export default Public