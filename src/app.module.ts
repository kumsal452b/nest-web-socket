import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './services/users/users.module';
import MGateAway from './Gateway/gateway';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailModule } from './services/email/email.module';
import { EmailConfirmationModule } from './services/email-confirmation/email-confirmation.module';
import UserSubscriber from './services/users/user.subscribe';
import * as Joi from '@hapi/joi';
import { AuthModule } from './services/auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      cache: false,
      validationSchema:Joi.object({
        JWT_VERIFICATION_TOKEN_SECRET: Joi.string().required(),
        JWT_VERIFICATION_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        EMAIL_CONFIRMATION_URL: Joi.string().required(),
        EMAIL_SERVICE: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        EMAIL_PASSWORD: Joi.string().required(),
      })
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: ['dist/entities/**/*{.ts,.js}'],
      synchronize: true,
      subscribers:[UserSubscriber]
    }),
    UsersModule,
    AuthModule,
    EmailModule,
    EmailConfirmationModule,
  ],
  controllers: [AppController],
  providers: [AppService, MGateAway],
})
export class AppModule {}
