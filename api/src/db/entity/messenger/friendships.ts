import * as Moment from 'moment'
import {Users} from '../user/users'
import {IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity("messenger_friendships")
export class Friendships {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsNumber()
	user_one_id: number

	@OneToOne(type => Users, { eager: true })
	@JoinColumn({ name: "user_one_id" })
	sender: Users

	@Column()
	@IsNumber()
	user_two_id: number

	@OneToOne(type => Users, { eager: true })
	@JoinColumn({ name: "user_two_id" })
	receiver: Users

	@Column()
	relation: number

	@Column({ default: Moment().unix()} )
	@IsNumber()
	friends_since: number

}
