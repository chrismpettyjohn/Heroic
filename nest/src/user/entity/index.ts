import {IsEmail} from 'class-validator';
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class UserEntity {
  
  constructor() {
    this.id = 0;
    this.username = '';
    this.mail = '';
    this.password = '';
    this.account_created = 0;
  }
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({unique: true})
  username: string;
  
  @Column({unique: true})
  @IsEmail()
  mail: string;
  
  @Column()
  password: string;
  
  @Column()
  account_created: number;
  
}

export interface UserEntityGeneric extends Omit<UserEntity, 'password'> {

}
