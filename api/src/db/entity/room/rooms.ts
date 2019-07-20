import {Users} from "../user/users";
import {IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

@Entity("rooms")
export class Rooms {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@OneToOne(type => Users, users => users.id)
	@JoinColumn({ name: "owner_id" })
	user: Users

}
