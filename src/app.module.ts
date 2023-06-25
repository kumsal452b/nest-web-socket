import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NpmController } from './services/run/npm/npm.controller';
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
      entities: ["dist/**/*{.ts,.js}"],
      synchronize: true,
    })],
  controllers: [AppController, NpmController],
  providers: [AppService],
})
export class AppModule {}
