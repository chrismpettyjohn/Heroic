import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users_currency")
export class Currency {

	@PrimaryGeneratedColumn()
	id!: number

	@Column()
	user_id: number

	@Column()
	type: number

	@Column()
	amount: number

}
