import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssetHierarchy } from 'src/entities/AssetHierarchy';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(AssetHierarchy) private astMtrRepo: Repository<AssetHierarchy>
      ) {}

      async edit(dto:any){
        return this.astMtrRepo.save(dto)
      }
}
