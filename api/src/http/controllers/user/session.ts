import * as Express from "express";
import {Controller, Get, Post} from '@tsed/common'

@Controller('/session')
export default class SessionController {


	@Post('')
	async createSession (request: Express.Request, response: Express.Response) {
		return response.send('Hello world')
	}

}



/*
try {
			const {username = '', password = ''} = body

			if (username === '' || password === '') {
				return response.sendStatus(400)
			}

			const jwt: string|false = await SessionService.start(username, password)

			if (!jwt) {
				return response.sendStatus(403)
			}
			else {
				return response.send(jwt)
			}

		}
		catch (e) {
			Logging.danger(`Session Controller - Create failed with error ${e}`)
			return response.sendStatus(500)
		}
 */
