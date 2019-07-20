import {IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users_favorite_rooms")
export class FavoriteRooms {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsNumber()
	user_id: number

	@Column()
	@IsNumber()
	room_id: number

}
