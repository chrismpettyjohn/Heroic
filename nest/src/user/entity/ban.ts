import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('bans')
export class BanEntity {
  
  constructor() {
    this.user_id = 0;
    this.ip = '';
    this.machine_id = '';
    this.user_staff_id = 0;
    this.timestamp = 0;
    this.ban_expire = 0;
    this.ban_reason = '';
    this.type = '';
    this.cfh_topic = '';
  }
  
  @PrimaryGeneratedColumn()
  id!: number;
  
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
