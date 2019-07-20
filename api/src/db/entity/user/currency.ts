import {IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users_currency")
export class Currency {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsNumber()
	user_id: number

	@Column()
	@IsNumber()
	type: number

	@Column()
	@IsNumber()
	amount: number

}
