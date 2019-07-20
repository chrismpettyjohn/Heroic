import {Rooms} from "db/entity/room/rooms";
import {getRepository, Repository} from "typeorm";

const RoomRepository: Repository<Rooms> = getRepository(Rooms)

export default {

	list: async (): Promise<Rooms[]> => RoomRepository.find(),

	read: async (id: number): Promise<Rooms> => RoomRepository.findOne(id)

}
