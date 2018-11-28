class Public {

  static async view (request, response) {
    response.send('Test')
  }

  static async list (request, response) {
    response.send('list here')
  }

}

export default Public