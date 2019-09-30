import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

export enum BanType {
  Account = 'account',
  IP = 'ip',
  Machine = 'machine',
  Super = 'super',
}

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
    this.type = BanType.Account;
    this.cfh_topic = 0;
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
  type: BanType;
  
  @Column()
  cfh_topic: number;
  
}
