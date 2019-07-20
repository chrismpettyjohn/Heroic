import * as Express from "express";
import RoomService from 'service/rooms'
import {Logging} from 'utility/logging';
import {Rooms} from "db/entity/room/rooms";
import {Controller, Get } from '@tsed/common'

@Controller('/rooms')
export default class RoomsController {

	@Get('')
	async list (request: Express.Request, response: Express.Response)
	{
		try {
			const result: Rooms[] = await RoomService.list()
			Logging.info(`Rooms Listed - Fetched ${result.length} rooms successfully`)
			return response.json(result)
		}
		catch (e) {
			Logging.danger(`Room List - Failed to return list due to ${e}`)
			return response.sendStatus(500)
		}
	}

	@Get('/:room')
	async read ({params: { room = 0 } }: Express.Request, response: Express.Response)
	{
		try {
			const result: Rooms = await RoomService.read(room)
			if (!result) {
				return response.sendStatus(404)
			}
			else {
				return response.json(result)
			}
		}
		catch (e) {
			Logging.danger(`Rooms Read - Failed to return room for ${room} - ${e}`)
			return response.sendStatus(500)
		}
	}

}
