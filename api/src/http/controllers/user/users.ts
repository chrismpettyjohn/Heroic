import * as Moment from "moment";
import * as Express from "express";
import {Logging} from 'utility/logging';
import UserService from 'service/user/users'
import {getRepository, Repository} from "typeorm";
import {Controller, Get, Post } from '@tsed/common'
import {Users, UserOnlineStatus} from "../../../db/entity/user/users";

@Controller('/users')
export default class UserController {

	@Post('')
	async create ({ body: { user }, ip }: Express.Request, response: Express.Response)
	{
		try {
			const result: Users = await UserService.create({
				...user,
				account_created: Moment().unix(),
				ip_register: ip,
				ip_current: ip
			})
			return response.json(result)
		}
		catch (e) {
			Logging.danger(`Users Create - Failed to create user ${user} due to ${e}`)
			return response.sendStatus(500)
		}
	}

	@Get('')
	async list ({ query: { username } }: Express.Request, response: Express.Response)
	{
		try {
			const result: Users[] = username
				? await UserService.search(username)
				: await UserService.list()
			Logging.info(`Users List - Fetched ${result.length} users successfully`)
			return response.json(result)
		}
		catch (e) {
			Logging.danger(`Users List - Failed to return list due to ${e}`)
			return response.sendStatus(500)
		}
	}

	@Get('/leaderboard')
	async leaderboard (request: Express.Request, response: Express.Response)
	{
		try {
			const result: Record<string, Users[]> = {
				credits: await this.getLeaderboard('credits'),
				pixels: await this.getLeaderboard('pixels'),
				points: await this.getLeaderboard('points')
			}
			Logging.info('User Leaderboard - Returned without issue')
			return response.json(result)
		}
		catch (e) {
			Logging.danger(`User Leaderboard - Failed to return - ${e}`)
			return response.sendStatus(500)
		}
	}

	@Get('/online')
	async online (request: Express.Request, response: Express.Response)
	{
		try {
			const result: Users[] = await UserService.query('online', '1')
			return response.json(result)
		}
		catch (e) {
			Logging.danger(`User Online - Failed to return - ${e}`)
			return response.sendStatus(500)
		}
	}

	@Get('/:user')
	async read ({params: { user = '' } }: Express.Request, response: Express.Response)
	{
		try {
			const result: Users = await UserService.read('username', user)

			if (result) {
				return response.json(result)
			}
			else {
				const results: Users[] = await UserService.search(user)
				return response.json(results)
			}
		}
		catch (e) {
			Logging.danger(`User Read - Failed to return user for ${user} - ${e}`)
			return response.sendStatus(500)
		}
	}

	private getLeaderboard = async (currency: string): Promise<Users[]> => {
		const UserRepository: Repository<Users> = getRepository(Users)
		return UserRepository
			.createQueryBuilder('users')
			.orderBy(currency)
			.limit(15)
			.getMany()
	}

}
