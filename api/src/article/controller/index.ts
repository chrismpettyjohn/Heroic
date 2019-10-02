import {ArticleEntity} from '../entity';
import {ArticleService} from '../service';
import {AuthGuard} from '@nestjs/passport';
import {Controller, Get, UseGuards, Query, Param} from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  
  constructor(private readonly service: ArticleService) {
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async findAll(): Promise<ArticleEntity[]> {
    return this.service.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ArticleEntity> {
    return this.service.findOne(id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('like')
  async search(@Query() query: any): Promise<ArticleEntity[]> {
    return this.service.findLike(query.title);
  }
  
}
