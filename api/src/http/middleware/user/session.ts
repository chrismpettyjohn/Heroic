import * as Express from 'express'
import BaseMiddleware from '../base'

export default class Session extends BaseMiddleware {

	constructor () {
		super()
	}

	handle (request: Express.Request, response: Express.Response, next: Express.NextFunction) {
		console.log('Test')
		return next(request)
	}

	key (): string {
		return 'session'
	}

	name (): string {
		return 'Session'
	}

	description (): string {
		return 'Only allow requests with a valid bearer token'
	}

}
