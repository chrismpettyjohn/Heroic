import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('heroic_articles')
export class ArticleEntity {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  category_id: number;
  
  @Column()
  user_id: number;
  
  @Column()
  image_large: string;
  
  @Column()
  image_small: string;
  
  @Column()
  title: string;
  
  @Column()
  description: string;
  
  @Column()
  content: string;
  
  @Column()
  timestamp: number;
  
}
