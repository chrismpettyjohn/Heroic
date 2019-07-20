import {Permissions} from "db/entity/permissions";
import {getRepository, Repository, Like} from "typeorm";

const BASE_RELATIONS: string[] = ['users']

const PermissionsRepository: Repository<Permissions> = getRepository(Permissions)

export default {

	create: async (permission: Permissions): Promise<Permissions> => PermissionsRepository.save(permission),

	list: async (): Promise<Permissions[]> => PermissionsRepository.find({ relations: BASE_RELATIONS }),

	read: async (id: number): Promise<Permissions> => PermissionsRepository.findOne({
		where: {
			id: id
		},
		relations: ['users']
	}),

	query: async (key: string, value: string): Promise<Permissions[]> => PermissionsRepository.find({
		where: {
			[key]: value
		},
		relations: BASE_RELATIONS
	}),

	search: async (name: string): Promise<Permissions[]> => PermissionsRepository.find({
		where: {
			rank_name: Like(`%${name}%`)
		},
		relations: BASE_RELATIONS
	})

}
