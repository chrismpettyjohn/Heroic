import Service from '@/modules/user/generic/service/user'

class Public {

  static async view (request, response) {
    try {
      response.send(Service.view(request.params.id))
    } catch (e) {
      response.status(400).send(e)
    }
  }

  static async list (request, response) {
    response.send('list here')
  }

}

export default Public