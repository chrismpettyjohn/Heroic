import { Repository, Like } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CategoryEntity} from '../entity/category';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {

  constructor( @InjectRepository(CategoryEntity) private readonly repository: Repository<CategoryEntity>) { }

  findAll(): Promise<CategoryEntity[]> {
    return this.repository.find({
      order: {
        id: 'DESC'
      }
    });
  }

  findLike(title: string): Promise<CategoryEntity[]> {
    return this.repository.find({
      where: {
        title: Like(title)
      }
    })
  }

  findOne(id: number): Promise<CategoryEntity> {
    return this.repository.findOne({
      where: {
        id
      }
    });
  }

}
