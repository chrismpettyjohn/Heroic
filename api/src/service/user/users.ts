import {getRepository, Repository, Like} from "typeorm";
import {Users} from "../../db/entity/user/users";

const UsersRepository: Repository<Users> = getRepository(Users)

export default {

	list: async (): Promise<Users[]> => UsersRepository.find(),

	read: async (key: string, value: string): Promise<Users> => UsersRepository.findOne({ [key]: value }),

	search: async (username: string): Promise<Users[]> => UsersRepository.find({ username: Like(`%${username}%`) })

}
