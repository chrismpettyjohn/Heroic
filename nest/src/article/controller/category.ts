import {AuthGuard} from '@nestjs/passport';
import {CategoryEntity} from '../entity/category';
import {CategoryService} from '../service/category';
import {Controller, Get, UseGuards, Query, Param} from '@nestjs/common';

@Controller('articles/categories')
export class CategoryController {
  
  constructor(private readonly service: CategoryService) {
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async findAll(): Promise<CategoryEntity[]> {
    return this.service.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CategoryEntity> {
    return this.service.findOne(id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('like')
  async search(@Query() query): Promise<CategoryEntity[]> {
    return this.service.findLike(query.title);
  }
  
}
