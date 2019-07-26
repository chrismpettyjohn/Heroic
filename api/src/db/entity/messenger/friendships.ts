import * as Moment from 'moment'
import {Users} from '../user/users'
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity("messenger_friendships")
export class Friendships {

	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	user_one_id: number

	@OneToOne(type => Users, { eager: true })
	@JoinColumn({ name: "user_one_id" })
	sender: Users

	@Column()
	user_two_id: number

	@OneToOne(type => Users, { eager: true })
	@JoinColumn({ name: "user_two_id" })
	receiver: Users

	@Column()
	relation: number

	@Column({ default: Moment().unix()} )
	friends_since: number

}