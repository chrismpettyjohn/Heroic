import {Articles} from 'db/entity/cms/articles'
import {getRepository, Repository} from "typeorm";

const ArticleRepository: Repository<Articles> = getRepository(Articles)

export default {
	list: async (): Promise<Articles[]> => ArticleRepository.find(),
	read: async (id: number): Promise<Articles> => ArticleRepository.findOne(id)
}




