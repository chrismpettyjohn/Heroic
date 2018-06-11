import Heroic from '~/app/heroic'
export default class Settings {
  static read (request, reply) {
    reply.code(200).send(Heroic.Build)
  }
}
