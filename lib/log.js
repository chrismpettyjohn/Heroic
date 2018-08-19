export default class Logging {
	static prefix = '  '
	static async push (handler, method, message, type) {
		switch (type) {
			case 'info':
				console.log(`${Logging.prefix} [INFO] ${message} [ ${handler}@${method} ]`)
				break
			case 'error':
				console.log(`${Logging.prefix} [ERROR] ${message} [ ${handler}@${method} ]`)
				break
			case 'fatal':
				console.log(`${Logging.prefix} [FATAL] ${message} [ ${handler}@${method} ]`)
				console.log(`${Logging.prefix} [FATAL] Heroic API service is coming to a fatal stop.`)
				process.exit('FATAL')
				break
			default:
				return true
				break
		}
	} 
}