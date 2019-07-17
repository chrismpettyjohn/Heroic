import * as Express from "express";
import Base, {Endpoint} from "../base";
import {Users} from "../../../db/entity/user/users";

export default class UsersController extends Base {

	static list = async (request: Express.Request, response: Express.Response) => {
		return response.send('hi')
	}

	name () {
		return 'Users'
	}

	description () {
		return 'CRUD on users table'
	}

	middleware () {
		return ['session']
	}

	prefix () {
		return 'users'
	}

	routes(): Endpoint[] {
		return [
			{
				type: 'get',
				path: 'list',
				method: UsersController.list
			}
		]
	}

}


