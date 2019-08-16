import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bans')
export class BanEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  ip: string;

  @Column()
  machine_id: string;

  @Column()
  user_staff_id: number;

  @Column()
  timestamp: number;

  @Column()
  ban_expire: number;

  @Column()
  ban_reason: string;

  @Column()
  type: string;

  @Column()
  cfh_topic: string;

}
