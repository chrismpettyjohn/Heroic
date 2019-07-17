import {getRepository, Repository} from "typeorm";
import {Users} from "../../db/entity/user/users";

const UsersRepository: Repository<Users> = getRepository(Users)

export default {

	list: async (): Promise<Users[]> => UsersRepository.find(),

	read: async (key: string, value: string): Promise<Users> => UsersRepository.findOneOrFail({
		where: {
			[key]: value
		},
		select: ['id', 'password']
	})

}
