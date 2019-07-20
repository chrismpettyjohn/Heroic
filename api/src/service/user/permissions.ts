import {Permissions} from "db/entity/permissions";
import {getRepository, Repository, Like} from "typeorm";

const PermissionsRepository: Repository<Permissions> = getRepository(Permissions)

export default {

	create: async (permission: Permissions): Promise<Permissions> => PermissionsRepository.save(permission),

	list: async (): Promise<Permissions[]> => PermissionsRepository.find(),

	read: async (id: number): Promise<Permissions> => PermissionsRepository.findOne(id),

	search: async (name: string): Promise<Permissions[]> => PermissionsRepository.find({ rank_name: Like(`%${name}%`) })

}
