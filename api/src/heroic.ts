import {HTTPServer} from 'http/server'
import {Logging} from 'utility/logging'

export default class Heroic {

	static HTTP: HTTPServer;
	static started: number;
	static finished: number;

	constructor () {
		Heroic.started = + new Date()
		Logging.info("Heroic 4 by LeChris")
		Heroic.HTTP = new HTTPServer()
		this.init()
	}

	private init = async (): Promise<void>  => {
		await Heroic.HTTP.start()
		Heroic.finished = + new Date()
		Logging.info(`Heroic has initialized in ${Math.floor(Heroic.finished-Heroic.started)}ms`)
	}

	public stop = async (): Promise<void> => {

	}

}
