import * as Express from "express";
import {Logging} from 'utility/logging';
import {Controller, Get } from '@tsed/common'
import {Articles} from 'db/entity/cms/articles'
import ArticleService from 'service/cms/articles'

@Controller('/articles')
export default class ArticleController {

	@Get('')
	async list (request: Express.Request, response: Express.Response)
	{
		try {
			const result: Articles[] = await ArticleService.list()
			Logging.info(`Articles Listed - Fetched ${result.length} articles successfully`)
			return response.json(result)
		}
		catch (e) {
			Logging.danger(`Articles List - Failed to return list due to ${e}`)
			return response.sendStatus(500)
		}
	}

	@Get('/:article')
	async read ({params: { article = 0 } }: Express.Request, response: Express.Response)
	{
		try {
			const result: Articles = await ArticleService.read(article)
			if (!result) {
				return response.sendStatus(404)
			}
			else {
				return response.json(result)
			}
		}
		catch (e) {
			Logging.danger(`Articles Read - Failed to return article for ${article} - ${e}`)
			return response.sendStatus(500)
		}
	}

}
