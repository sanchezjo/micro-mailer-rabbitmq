import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MailService } from './mail.service';

@Controller()
export class AppController {
  constructor(private mailService: MailService) {}

  @MessagePattern('mail.create')
  public async rabbitIndex(data: any) {
    if (!data || (data && Object.keys(data).length === 0)) {
      throw new Error('Missing informations');
    }

    try {
      await this.mailService.send(data.from, data.to, data.subject, data.text);
    } catch (e) {
      console.error(e);
    }
  }
}
