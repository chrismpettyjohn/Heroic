import {Middleware} from '@tsed/common'

@Middleware()
export class GlobalMiddleware {

	async use (request, response, next) {
		next()
	}

}
