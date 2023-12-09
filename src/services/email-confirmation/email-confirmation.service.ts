import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../email/email.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class EmailConfirmationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
    private readonly usersService:UsersService
  ) {}

  public sendVerificationLink(email: string) {
    const payload: { email: string } = { email };
    const token = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_VERIFICATION_TOKEN_EXPIRATION_TIME,
    });

    const url = `${process.env.EMAIL_CONFIRMATION_URL}?token=${token}`;
    const text = `Welcome to the application. To confirm the email address, click here: ${url}`;
    return this.emailService.sendMail({
      to: email,
      subject: 'Email confirmation',
      text,
    });
  }
  public async confirmEmail(email: string) {
    const user = await this.usersService.findOne(email);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    return this.usersService.markEmailAsConfirmed(user);
  }

  public async decodeConfirmationToken(token: string) {
    try {
      const payload = await this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
 
      if (typeof payload === 'object' && 'email' in payload) {
        return payload.email;
      }
      throw new BadRequestException();
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        throw new BadRequestException('Email confirmation token expired');
      }
      throw new BadRequestException('Bad confirmation token');
    }
  }
  public async resendConfirmationLink(email: string) {
    const user = await this.usersService.findOne(email);
    if (user.isEmailConfirmed) {
      throw new BadRequestException('Email already confirmed');
    }
    await this.sendVerificationLink(user.email);
  }
 
}
