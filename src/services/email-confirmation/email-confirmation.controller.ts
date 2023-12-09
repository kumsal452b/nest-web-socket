import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { EmailConfirmationService } from './email-confirmation.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('email-confirmation')
export class EmailConfirmationController {
  constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}
  @Post('confirm')
  async confirm(@Body() confirmationData: any) {
    const email = await this.emailConfirmationService.decodeConfirmationToken(
      confirmationData.token,
    );
    await this.emailConfirmationService.confirmEmail(email);
  }

  @Post('resend-confirmation-link')
  @UseGuards(JwtAuthGuard)
  async resendConfirmationLink(@Req() request: any) {
    await this.emailConfirmationService.resendConfirmationLink(request.user.id);
  }
}
