import { Module } from '@nestjs/common';
import { ArticleEntity} from './entity';
import { ArticleService} from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController} from './controller';
import { CategoryEntity} from './entity/category';
import { CategoryService} from './service/category';
import { CategoryController} from './controller/category';
@Module({
  controllers: [
    ArticleController,
    CategoryController
  ],
  exports: [
    ArticleService,
    CategoryService
  ],
  imports: [
    TypeOrmModule.forFeature([
      ArticleEntity,
      CategoryEntity
    ]),
  ],
  providers: [
    ArticleService,
    CategoryService
  ],
})

export class ArticleModule { }
