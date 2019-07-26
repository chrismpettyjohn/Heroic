import {Users} from "./user/users";
import {Boolean} from "interface/common";
import {IsAlpha, IsAlphanumeric, IsEnum} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

export enum RankType {
	User = 'user',
	VIP = 'vip',
	Staff = 'staff',
	Hidden = 'hidden'
}

@Entity("permissions")
export class Permissions {

	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	@IsAlphanumeric()
	rank_name: string

	@Column()
	@IsAlphanumeric()
	rank_desc: string

	@Column()
	@IsEnum(RankType)
	rank_type: RankType

	@Column()
	@IsAlpha()
	rank_badge: string

	@Column()
	level: number

	@Column()
	room_effect: number

	@Column()
	@IsEnum(Boolean)
	log_commands: Boolean

	@Column()
	@IsAlpha()
	prefix: string

	@Column()
	@IsAlpha()
	prefix_color: string

	@OneToMany(type => Users, users => users.rank)
	users: Users[]

}
