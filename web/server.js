import FS from 'fs'
import Path from 'path'
import Fastify from 'fastify'
import Config from '@/config/system'
export default class HTTP {
	static server = {}
	static middleware = []
	static async init() {
		try {
			await HTTP.prepare()
      await HTTP.listen()
      return Promise.resolve()
		} catch (e) {
			return Promise.reject(e)
		}
	}

	static async prepare() {
		// Configure
		HTTP.server = new Fastify({
			http2: true,
			https: {
				key: FS.readFileSync(Path.join(__dirname, '..', 'config', 'ssl.key.pem')),
				cert: FS.readFileSync(Path.join(__dirname, '..', 'config', 'ssl.cert.pem'))
			}
		})
		// Return
		return Promise.resolve()
	}

	static async listen() {
		try {
			await HTTP.server.listen(Config.web.port)
			return Promise.resolve()
		} catch (e) {
			return Promise.reject(e)
		}
	}

}