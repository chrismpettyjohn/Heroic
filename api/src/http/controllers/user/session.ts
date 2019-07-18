import * as Express from "express";
import {Logging} from 'utility/logging';
import SessionService from 'service/user/session'
import {Controller, Get, Post, UseBefore} from '@tsed/common'
import {SessionMiddleware} from 'http/middleware/user/session'

@Controller('/session')
export default class SessionController {

	@Post('')
	async create ({ body }: Express.Request, response: Express.Response) {
		try {
			const {username = '', password = ''} = body

			console.log(body)

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
	}

	@Get('')
	@UseBefore(SessionMiddleware)
	async read ({ session }: any, response: Express.Response) {
		return response.json(session)
	}




}
