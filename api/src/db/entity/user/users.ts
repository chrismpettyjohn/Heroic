import {Bans} from "./bans";
import {Badges} from "./badges";
import * as Moment from "moment";
import {Currency} from "./currency";
import {Settings} from "./settings";
import {Rooms} from "../room/rooms";
import {Guilds} from '../guild/guilds'
import {Permissions } from "../permissions";
import {FavoriteRooms} from "./favorite-rooms";
import {Friendships} from '../messenger/friendships'
import { IsEnum, IsNumber, IsAlphanumeric, IsEmail } from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany, OneToOne, JoinColumn } from "typeorm";

export enum UserOnlineStatus {
	Offline = 0,
	Online = 1,
	Hidden = 2
}

@Entity()
@Unique(['id', 'username', 'mail'])
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

	@Column({ default: Moment().unix() })
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

	@OneToOne(type => Permissions, rank => rank.id)
	@JoinColumn({ name: "rank" })
	rank: Permissions

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

	@Column({ select: false })
	ip_register: string

	@Column({ select: false })
	ip_current: string

	@Column({ select: false })
	machine_id: string

	@Column()
	@IsNumber()
	home_room: number

	@OneToMany(type => Bans, bans => bans.user_id)
	bans: Bans[]

	@OneToMany(type => Badges, badges => badges.user)
	badges: Badges[]

	@OneToMany(type => Currency, currency => currency.user_id)
	currency: Currency[]

	@OneToOne(type => Settings, settings => settings.user_id)
	settings: Settings

	@OneToMany(type => FavoriteRooms, favorite => favorite.user_id)
	favoriteRooms: FavoriteRooms[]

	@OneToMany(type => Friendships, friendships => friendships.sender)
	friendships: Friendships[]

	@OneToMany(type => Guilds, guilds => guilds.user)
	guilds: Guilds[]

	@OneToMany(type => Rooms, rooms => rooms.user)
	rooms: Rooms[]

}
