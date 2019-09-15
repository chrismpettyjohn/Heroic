import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('heroic_articles')
export class ArticleEntity {
  
  constructor() {
    this.id = 0;
    this.category_id = 0;
    this.user_id = 0;
    this.image_large = '';
    this.image_small = '';
    this.title = '';
    this.description = '';
    this.content = '';
    this.timestamp = 0;
  }
  
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
