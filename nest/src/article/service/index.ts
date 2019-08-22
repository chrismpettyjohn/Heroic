import { ArticleEntity} from '../entity';
import { Repository, Like } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArticleService {

  constructor( @InjectRepository(ArticleEntity) private readonly repository: Repository<ArticleEntity>) { }

  findAll(): Promise<ArticleEntity[]> {
    return this.repository.find({
      order: {
        id: 'DESC'
      }
    });
  }

  findLike(title: string): Promise<ArticleEntity[]> {
    return this.repository.find({
      where: {
        title: Like(title)
      }
    })
  }

  findOne(id: number): Promise<ArticleEntity> {
    return this.repository.findOne({
      where: {
        id
      }
    });
  }

}
