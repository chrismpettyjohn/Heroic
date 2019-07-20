import {IsAlphanumeric, IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users_badges")
export class Badges {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsNumber()
	user_id: number

	@Column()
	@IsNumber()
	slot_id: number

	@Column()
	@IsAlphanumeric()
	badge_code: string

}
