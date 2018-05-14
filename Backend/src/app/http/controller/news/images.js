import File from 'fs'
import Path from 'path'
export default class Controller {

  static read (request, reply) {
    let list  = []
    let files = File.readdirSync(Path.resolve(__dirname, '..', '..', '..', '..', 'public', 'assets', 'img', 'articles'))

    files.forEach(file => {
        if (file.indexOf('_thumb') > -1) {
            list.push(file.replace('_thumb.png', ''))
        } 
    })

    reply.code(200).send(list)
  }

}
