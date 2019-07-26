import {Boolean} from "interface/common";
import {IsEnum} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity("users_settings")
export class Settings {

	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	user_id: number

	@Column()
	credits: number

	@Column()
	achievement_score: number

	@Column()
	daily_respect_points: number

	@Column()
	daily_pet_respect_points: number

	@Column()
	respects_given: number

	@Column()
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
	citizen_level: number

	@Column()
	helper_level: number

	@Column()
	cfh_send:number

	@Column()
	cfh_abusive: number

	@Column()
	cfh_warnings: number

	@Column()
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
	volume_system: number

	@Column()
	volume_furni: number

	@Column()
	volume_trax: number

	@Column()
	@IsEnum(Boolean)
	old_chat: Boolean

	@Column()
	@IsEnum(Boolean)
	block_camera_follow: Boolean

	@Column()
	chat_color: number

	@Column()
	home_room: number

	@Column()
	online_time: number

	@Column()
	tags: string

	@Column()
	club_expire_timestamp: number

	@Column()
	login_streak: number

	@Column()
	rent_space_id: number

	@Column()
	rent_space_endtime: number

	@Column()
	hof_points: number

	@Column()
	@IsEnum(Boolean)
	block_alerts: Boolean

	@Column()
	talent_track_citizenship_level: number

	@Column()
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
	mute_end_timestmap: number

	@Column()
	@IsEnum(Boolean)
	allow_name_change: Boolean


	@Column()
	@IsEnum(Boolean)
	perk_trade: Boolean

}
