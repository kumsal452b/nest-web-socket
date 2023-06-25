import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AssetHierarchy } from 'src/entities/AssetHierarchy';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [TypeOrmModule.forFeature([AssetHierarchy])],
    exports: [TypeOrmModule, UsersService],
  })
export class UsersModule {}
