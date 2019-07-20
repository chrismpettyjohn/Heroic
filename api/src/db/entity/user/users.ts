import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { IsEnum, IsNumber, IsAlphanumeric, IsEmail } from 'class-validator'


export enum UserOnlineStatus {
	Offline = 0,
	Online = 1,
	Hidden = 2
}

@Entity()
export class Users {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsAlphanumeric()
	username: string

	@Column({ select: false })
	password: string

	@Column()
	@IsEmail()
	mail: string

	@Column()
	@IsNumber()
	account_created: number

	@Column()
	@IsNumber()
	last_login: number

	@Column()
	@IsNumber()
	last_online: number

	@Column()
	@IsAlphanumeric()
	motto: string

	@Column()
	look: string

	@Column()
	rank: number

	@Column()
	@IsNumber()
	credits: number

	@Column()
	@IsNumber()
	pixels: number

	@Column()
	@IsNumber()
	points: number

	@Column()
	@IsEnum(UserOnlineStatus)
	online: UserOnlineStatus

}
