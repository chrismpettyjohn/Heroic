import * as Express from "express";
import Logger from "../utility/logger";

export default class HTTP {

	static server: any;
	static controllers: number = 0;

	constructor () {
		HTTP.server = Express()
		this.initService()
	}

	initService = async (): Promise<void> => {
		await Promise.all([
			this.initMiddleware(),
			this.initControllers()
		])
		await this.initInstance()
	}

	initMiddleware = async () : Promise<void> => {

	}

	initControllers = async (): Promise<void> => {
		await require('./controllers')
		Logger.info(`HTTP service has loaded ${HTTP.controllers} controllers`)
	}

	initInstance = async (): Promise<void> => {
		try {
			await HTTP.server.listen(process.env.HTTP_PORT)
			Logger.info(`HTTP service has started on port ${process.env.HTTP_PORT}`)
		}
		catch (error) {
			Logger.error(`HTTP service failed to start due to: ${error}`)
		}
	}

}
