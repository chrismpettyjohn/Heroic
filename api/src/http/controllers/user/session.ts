import Base, {Endpoint} from "../base";
import * as Express from "express";

export default class Session extends Base {

	static create = (request: Express.Request, response: Express.Response) => {
		return response.send("Welcome to login controller")
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
				method: Session.create
			},
			{
				type: 'get',
				path: '',
				method: Session.read
			}
		]
	}

}


