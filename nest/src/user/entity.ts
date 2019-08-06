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

  @Column({ select: false })
  password: string;

  @Column({ name: 'account_created'})
  accountCreated: number;

}
