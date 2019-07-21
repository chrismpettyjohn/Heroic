import * as Moment from 'moment'
import {Users} from '../user/users'
import {IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity("guilds")
export class Guilds {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsNumber()
	user_id: number

	@OneToOne(type => Users)
	@JoinColumn({ name: "user_id" })
	user: Users

	@Column()
	name: string

	@Column()
	description: string

	@Column()
	@IsNumber()
	room_id: number

	@Column()
	@IsNumber()
	state: number

	@Column({ default: Moment().unix() })
	@IsNumber()
	date_created: number

}
