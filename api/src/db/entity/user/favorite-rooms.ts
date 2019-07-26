import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users_favorite_rooms")
export class FavoriteRooms {

	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	user_id: number

	@Column()
	room_id: number

}
