import HTTP from "./http/server";
import Logger from "./utility/logger";

export default class Heroic {

	constructor () {
		Logger.info("Heroic 4 by LeChris")
		new HTTP()
	}

	stop = async (): Promise<void> => {

	}

}
