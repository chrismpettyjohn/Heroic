import {HTTPServer} from 'http/server'
import {Logging} from 'utility/logging'

export default class Heroic {

	static HTTP: HTTPServer;

	constructor () {
		Logging.info("Heroic 4 by LeChris")
		Heroic.HTTP = new HTTPServer()
		this.init()
	}

	private init = async (): Promise<void>  => {
		Heroic.HTTP.start()
	}

	public stop = async (): Promise<void> => {

	}

}
