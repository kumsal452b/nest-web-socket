import { Module } from '@nestjs/common';
import { EmailConfirmationService } from './email-confirmation.service';
import { EmailConfirmationController } from './email-confirmation.controller';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../email/email.service';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetHierarchy } from 'src/entities/AssetHierarchy';
import User from 'src/entities/user.entity';

@Module({
  controllers: [EmailConfirmationController],
  providers: [EmailConfirmationService, JwtService, EmailService, UsersService],
  imports: [TypeOrmModule.forFeature([AssetHierarchy,User])],
})
export class EmailConfirmationModule {}
