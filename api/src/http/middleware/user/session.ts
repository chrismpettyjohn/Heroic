import {ParseJWT} from 'utility/jwt'
import {Middleware} from '@tsed/common'
import {Logging} from 'utility/logging'
import UserService from 'service/user/users'
import {Users} from 'db/entity/user/users'


/*
Note to self:
I think the request is being made static (It won't reset) I tried removing headers on Insomnia and they still show on here.  Interesting.
 */
@Middleware()
export class SessionMiddleware {

	async use (request, response, next) {
		try {
			if (!request.headers.authorization) {
				return response.sendStatus(403)
			}
			else {
				console.log(request.headers.authorization)
				const token: any = ParseJWT(request.headers.authorization.split('Bearer ')[1])
				const user: Users = await UserService.read('id', token.id)
				request.session = user
				return next()
			}
		}
		catch (error) {
			Logging.warning(`Session Middleware - use error occurred: ${error}`)
			return response.sendStatus(403)
		}
	}

}
