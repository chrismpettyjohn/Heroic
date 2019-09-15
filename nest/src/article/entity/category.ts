import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('heroic_articles_categories')
export class CategoryEntity {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;
  
  @Column()
  content: string;
  
  @Column()
  timestamp: number;
  
}
