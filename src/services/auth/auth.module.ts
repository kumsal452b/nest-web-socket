import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { EmailConfirmationService } from '../email-confirmation/email-confirmation.service';
import { EmailService } from '../email/email.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      // <-- Register the JwtModule
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy,EmailConfirmationService,EmailService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
