import { Repository } from 'typeorm';
import { BanEntity } from '../entity/ban';
import { Injectable } from '@nestjs/common';
import { CoreService } from '../../core/service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BanService {

  constructor(
    @InjectRepository(BanEntity) private readonly repository: Repository<BanEntity>,
    private coreService: CoreService
  ) { }

  async findAllForIP (ip: string): Promise<BanEntity[]> {
    return this.repository.find({
      where: {
        ip: this.coreService.hashString(ip)
      }
    })
  }

  async findLatestForIP (ip: string): Promise<BanEntity> {
    return this.repository.findOne({
      where: {
        ip: this.coreService.hashString(ip)
      },
      order: {
        id: 'DESC'
      }
    })
  }

  async findAllForUser (id: number): Promise<BanEntity[]> {
    return await this.repository.find({
      where: {
        user_id: id
      }
    })
  }

  async findLatestForUser (id: number): Promise<BanEntity> {
    return await this.repository.findOne({
      where: {
        user_id: id
      },
      order: {
        id: 'DESC'
      }
    })
  }

}
