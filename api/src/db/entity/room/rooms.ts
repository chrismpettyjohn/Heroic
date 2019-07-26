import {Users} from "../user/users";
import { IsEnum} from 'class-validator'
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

export enum RoomState {
	Open = 'open',
	Locked = 'locked',
	Password = 'password',
	Invisible = 'invisible'
}

@Entity("rooms")
export class Rooms {

	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	owner_id: number

	@OneToOne(type => Users, users => users.id)
	@JoinColumn({ name: "owner_id" })
	user: Users

	@Column()
	readonly owner_name: string

	@Column()
	name: string

	@Column()
	description: string

	@Column()
	model: string

	@Column()
	password: string

	@Column()
	@IsEnum(RoomState)
	state: RoomState

	@Column()
	readonly users: number

	@Column()
	users_max: number

	@Column()
	guild_id: number

	@Column()
	category: number

	@Column()
	readonly score: number

	@Column()
	tags: string

}
