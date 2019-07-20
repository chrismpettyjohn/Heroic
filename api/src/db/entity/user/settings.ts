import {Boolean} from "interface/common";
import {IsEnum, IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity("users_settings")
export class Settings {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsNumber()
	user_id: number

	@Column()
	@IsNumber()
	credits: number

	@Column()
	@IsNumber()
	achievement_score: number

	@Column()
	@IsNumber()
	daily_respect_points: number

	@Column()
	@IsNumber()
	daily_pet_respect_points: number

	@Column()
	@IsNumber()
	respects_given: number

	@Column()
	@IsNumber()
	guild_id: number

	@Column()
	@IsEnum(Boolean)
	can_change_name: Boolean

	@Column()
	@IsEnum(Boolean)
	can_trade: Boolean

	@Column()
	@IsEnum(Boolean)
	is_citizen: Boolean

	@Column()
	@IsNumber()
	citizen_level: number

	@Column()
	@IsNumber()
	helper_level: number

	@Column()
	@IsNumber()
	cfh_send:number

	@Column()
	@IsNumber()
	cfh_abusive: number

	@Column()
	@IsNumber()
	cfh_warnings: number

	@Column()
	@IsNumber()
	cfh_bans: number

	@Column()
	@IsEnum(Boolean)
	block_following: Boolean

	@Column()
	@IsEnum(Boolean)
	block_friendrequests: Boolean

	@Column()
	@IsEnum(Boolean)
	block_roominvites: Boolean

	@Column()
	@IsNumber()
	volume_system: number

	@Column()
	@IsNumber()
	volume_furni: number

	@Column()
	@IsNumber()
	volume_trax: number

	@Column()
	@IsEnum(Boolean)
	old_chat: Boolean

	@Column()
	@IsEnum(Boolean)
	block_camera_follow: Boolean

	@Column()
	@IsNumber()
	chat_color: number

	@Column()
	@IsNumber()
	home_room: number

	@Column()
	@IsNumber()
	online_time: number

	@Column()
	tags: string

	@Column()
	@IsNumber()
	club_expire_timestamp: number

	@Column()
	@IsNumber()
	login_streak: number

	@Column()
	@IsNumber()
	rent_space_id: number

	@Column()
	@IsNumber()
	rent_space_endtime: number

	@Column()
	@IsNumber()
	hof_points: number

	@Column()
	@IsEnum(Boolean)
	block_alerts: Boolean

	@Column()
	@IsNumber()
	talent_track_citizenship_level: number

	@Column()
	@IsNumber()
	talent_track_helpers_level: number

	@Column()
	@IsEnum(Boolean)
	ignore_bots: Boolean

	@Column()
	@IsEnum(Boolean)
	ignore_pets: Boolean

	@Column()
	@IsEnum(Boolean)
	nux: Boolean

	@Column()
	@IsNumber()
	mute_end_timestmap: number

	@Column()
	@IsEnum(Boolean)
	allow_name_change: Boolean


	@Column()
	@IsEnum(Boolean)
	perk_trade: Boolean

}
