import * as Express from "express";
import {Logging} from 'utility/logging'
import Base, {Endpoint} from "../base";
import SessionService from 'service/user/session'
export default class SessionController extends Base {

	static create = async ({ body }: Express.Request, response: Express.Response) => {
		try {
			const {username, password} = body
			const jwt: string|false = await SessionService.start(username, password)

			if (!jwt) {
				return response.sendStatus(401)
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

	static read = (request: Express.Request, response: Express.Response) => {
		return response.send('Here is your user session')
	}

	name () {
		return 'Session'
	}

	description () {
		return 'Handles authenticating users'
	}

	middleware () {
		return ['session']
	}

	prefix () {
		return 'session'
	}

	routes(): Endpoint[] {
		return [
			{
				type: 'post',
				path: '',
				method: SessionController.create
			},
			{
				type: 'get',
				path: '',
				method: SessionController.read
			}
		]
	}

}


