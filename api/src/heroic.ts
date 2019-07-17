import HTTP from "http/server";
import {Logging} from 'utility/logging'

export default class Heroic {

	constructor () {
		Logging.info("Heroic 4 by LeChris")
		new HTTP()
	}

	stop = async (): Promise<void> => {

	}

}
