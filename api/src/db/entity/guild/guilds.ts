import * as Moment from 'moment'
import {Users} from '../user/users'
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity("guilds")
export class Guilds {

	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	user_id: number

	@OneToOne(type => Users)
	@JoinColumn({ name: "user_id" })
	user: Users

	@Column()
	name: string

	@Column()
	description: string

	@Column()
	room_id: number

	@Column()
	state: number

	@Column({ default: Moment().unix() })
	date_created: number

}
