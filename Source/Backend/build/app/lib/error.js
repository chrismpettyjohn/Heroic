'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Library {

  constructor(error, request, reply) {
    if (error.toString().indexOf('RETURN:') > -1) {
      reply.code(200).send({ error: error.toString().split('RETURN: ')[1] });
    } else {
      console.log(` [ ERROR ] ${error}`);
      reply.code(500).send({ error: 'Internal server error' });
    }
  }

}
exports.default = Library;