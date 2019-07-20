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

	@OneToOne(type => Users, { eager: true })
	@JoinColumn({ name: "user_id" })
	user: Users

	@OneToOne(type => Rooms, { eager: true })
	@JoinColumn({ name: "room_id" })
	room: Rooms

	@Column({ default: Moment().unix() })
	@IsNumber()
	timestamp: number

	@Column()
	@IsUrl()
	url: string

}
