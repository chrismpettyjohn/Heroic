import * as Express from "express";
import {Logging} from 'utility/logging';
import {Controller, Get } from '@tsed/common'
import {Permissions} from "db/entity/permissions";
import PermissionService from 'service/user/permissions'

@Controller('/permissions')
export default class PermissionsController {

	@Get('')
	async list ({ query: { rank } }: Express.Request, response: Express.Response)
	{
		try {
			const result: Permissions[] = rank
				? await PermissionService.search(rank)
				: await PermissionService.list()
			Logging.info(`Permissions Listed - Fetched ${result.length} ranks successfully`)
			return response.json(result)
		}
		catch (e) {
			Logging.danger(`Users List - Failed to return list due to ${e}`)
			return response.sendStatus(500)
		}
	}

	@Get('/:rank')
	async read ({params: { rank = 0 } }: Express.Request, response: Express.Response)
	{
		try {
			const result: Permissions = await PermissionService.read(rank)
			if (!result) {
				return response.sendStatus(404)
			}
			else {
				return response.json(result)
			}
		}
		catch (e) {
			Logging.danger(`Permissions Read - Failed to return rank for ${rank} - ${e}`)
			return response.sendStatus(500)
		}
	}

}
