import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './services/users/users.controller';
import { UsersService } from './services/users/users.service';
import { UsersModule } from './services/users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot({
       envFilePath:'.env',
       isGlobal:true,
       cache:false,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: ["dist/entities/**/*{.ts,.js}"],
      synchronize: true,
    }),
    UsersModule],
  controllers: [AppController,UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
