import {Users} from "./users";
import {IsAlphanumeric, IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";

@Entity("users_badges")
export class Badges {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsNumber()
	user_id: number

	@OneToOne(type => Users, users => users.id)
	@JoinColumn({ name: 'user_id' })
	user: Users

	@Column()
	@IsNumber()
	slot_id: number

	@Column()
	@IsAlphanumeric()
	badge_code: string

}
