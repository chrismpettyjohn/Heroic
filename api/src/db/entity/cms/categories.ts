import * as Moment from "moment";
import {Articles} from "./articles";
import {IsAlphanumeric, IsNumber} from 'class-validator'
import {Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("cms_categories")

export class Categories {

	@PrimaryGeneratedColumn()
	@IsNumber()
	id!: number

	@Column()
	@IsAlphanumeric()
	title: string

	@Column("text")
	content: string

	@Column({ default: Moment().unix() })
	@IsNumber()
	timestamp: number

	@OneToMany(type => Articles, articles => articles.category_id)
	articles: Articles[]

}
