import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('heroic_articles_categories')
export class CategoryEntity {
  
  constructor() {
    this.id = 0;
    this.title = '';
    this.content = '';
    this.timestamp = 0;
  }
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;
  
  @Column()
  content: string;
  
  @Column()
  timestamp: number;
  
}
