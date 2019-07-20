import {Camera} from "../db/entity/camera";
import {getRepository, Repository} from "typeorm";

const CameraRepository: Repository<Camera> = getRepository(Camera)

export default {

	list: async (): Promise<Camera[]> => CameraRepository.find(),

	read: async (id: number): Promise<Camera> => CameraRepository.findOne()

}
