import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AssetHierarchy } from 'src/entities/AssetHierarchy';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserSubscriber from './user.subscribe';
import User from 'src/entities/user.entity';

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [TypeOrmModule.forFeature([AssetHierarchy,User])],
    exports: [TypeOrmModule, UsersService],
  })
export class UsersModule {}
