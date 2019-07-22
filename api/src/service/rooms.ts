import {Rooms} from "db/entity/room/rooms";
import {getRepository, Repository} from "typeorm";

const options = {
	relations: ['user']
}

const RoomRepository: Repository<Rooms> = getRepository(Rooms)

export default {

	list: async (): Promise<Rooms[]> => RoomRepository.find(options),

	read: async (id: number): Promise<Rooms> => RoomRepository.findOne(id, options)

}
