import {Users} from "../user/users";
import { IsEnum, IsNumber } from 'class-validator'
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
	@IsNumber()
	id!: number

	@Column()
	@IsNumber()
	owner_id: number

	@OneToOne(type => Users, users => users.id, { eager: true })
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
	@IsNumber()
	users_max: number

	@Column()
	@IsNumber()
	guild_id: number

	@Column()
	@IsNumber()
	category: number

	@Column()
	readonly score: number

	@Column()
	tags: string

}
