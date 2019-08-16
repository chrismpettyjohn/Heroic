import { IsEmail } from 'class-validator';
import { Entity, Column,  PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true})
  @IsEmail()
  mail: string;

  @Column()
  password: string;

  @Column()
  account_created: number;

}
