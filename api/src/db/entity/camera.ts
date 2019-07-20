import * as Moment from "moment"
import {Users} from "./user/users";
import {Rooms} from "./room/rooms";
import {IsNumber, IsUrl} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity("camera_web")
export class Camera {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@OneToOne(type => Users, users => users.id)
	@JoinColumn({ name: "user_id" })
	user: Users

	@OneToOne(type => Rooms, rooms => rooms.id)
	@JoinColumn({ name: "room_id" })
	room: Rooms

	@Column({ default: Moment().unix() })
	@IsNumber()
	timestamp: number

	@Column()
	@IsUrl()
	url: string

}
