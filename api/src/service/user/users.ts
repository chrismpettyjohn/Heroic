import {getRepository, Repository, Like} from "typeorm";
import {Users} from "../../db/entity/user/users";

const UsersRepository: Repository<Users> = getRepository(Users)

export default {

	create: async (user: Users): Promise<Users> => UsersRepository.save(user),

	list: async (): Promise<Users[]> => UsersRepository.find(),

	read: async (key: string, value: string): Promise<Users> => UsersRepository.findOne({
		[key]: value,
		relations: ['badges', 'friendships', 'guilds', 'rooms']
	}),

	getPassword: async (username: string): Promise<Users> => UsersRepository
		.createQueryBuilder('users')
		.addSelect('users.password')
		.where('users.username = :username', { username: username })
		.getOne(),

	search: async (username: string): Promise<Users[]> => UsersRepository.find({ username: Like(`%${username}%`) }),

	query: async (key: string, value: any): Promise<Users[]> => UsersRepository.find({
		where: {
			[key]: value
		}
	})

}
