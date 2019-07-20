import * as Moment from "moment";
import {Users} from "../user/users";
import {Categories} from "./categories";
import {IsAlphanumeric, IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity("cms_articles")

export class Articles {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsAlphanumeric()
	title: string

	@Column()
	description: string

	@Column("text")
	content: string

	@Column()
	image: string

	@Column({ default: Moment().unix() })
	@IsNumber()
	timestamp: number

	@Column()
	@IsNumber()
	category_id: number

	@OneToOne(type => Categories, { eager: true })
	@JoinColumn({ name: 'category_id' })
	category: Categories

	@Column()
	@IsNumber()
	user_id: number

	@OneToOne(type => Users, { eager: true })
	@JoinColumn({ name: 'user_id' })
	user: Users

}
