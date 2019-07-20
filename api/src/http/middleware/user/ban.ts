import {Middleware} from '@tsed/common'
import {Logging} from 'utility/logging'
import {Bans} from "../../../db/entity/user/bans";
import {getRepository, Repository} from "typeorm";
import * as Express from "express";


@Middleware()
export class BanMiddleware {

	async use ({ ip }: Express.Request, response: Express.Response, next: Express.NextFunction) {
		try {
			const repository: Repository<Bans> = getRepository(Bans)
			const result: Bans[] = await repository.find({ ip: ip })
			if (result.length > 0) {
				return response.sendStatus(403).send('IP Banned')
			}
			else {
				next()
			}
		}
		catch (error) {
			Logging.warning(`Ban Middleware - use error occurred: ${error}`)
			return response.sendStatus(403)
		}
	}

}
