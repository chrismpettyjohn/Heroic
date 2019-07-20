import * as Express from "express";
import {Logging} from 'utility/logging';
import {Camera} from "db/entity/camera";
import CameraService from 'service/camera'
import {Controller, Get } from '@tsed/common'

@Controller('/camera')
export default class CameraController {

	@Get('')
	async list ({ query: { rank } }: Express.Request, response: Express.Response)
	{
		try {
			const result: Camera[] = await CameraService.list()
			Logging.info(`Camera Listed - Fetched ${result.length} photos successfully`)
			return response.json(result)
		}
		catch (e) {
			Logging.danger(`Camera List - Failed to return list due to ${e}`)
			return response.sendStatus(500)
		}
	}

	@Get('/:camera')
	async read ({params: { camera = 0 } }: Express.Request, response: Express.Response)
	{
		try {
			const result: Camera = await CameraService.read(camera)
			if (!result) {
				return response.sendStatus(404)
			}
			else {
				return response.json(result)
			}
		}
		catch (e) {
			Logging.danger(`Cameras Read - Failed to return photo for ${camera} - ${e}`)
			return response.sendStatus(500)
		}
	}

}
