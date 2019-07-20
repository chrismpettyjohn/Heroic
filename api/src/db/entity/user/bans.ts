import * as Moment from "moment"
import { IsEnum, IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";


export enum BanType {
	Account = 'account',
	IP = 'ip',
	Machine = 'machine',
	Super = 'super'
}

@Entity("bans")
export class Bans {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsNumber()
	user_id: number

	@Column({ select: false })
	ip: string

	@Column({ select: false })
	machine_id: string

	@Column()
	@IsNumber()
	user_staff_id: number

	@Column({ default: Moment().unix() })
	@IsNumber()
	timestamp: number

	@Column({ default: Moment().add(60, 'days').unix() })
	@IsNumber()
	ban_expire: number

	@Column({ default: 'Banned Via HK' })
	ban_reason: string

	@Column()
	@IsEnum(BanType)
	type: BanType

	@Column()
	@IsNumber()
	cfh_topic: number

}
