import { Inject, Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ITransporteurOptions } from './types';

@Injectable()
export class MailService {
  private transporter!: nodemailer.Transporter;
  private options: ITransporteurOptions;

  constructor(@Inject('options.transport') options: ITransporteurOptions) {
    this.options = options;
    this.transporter = nodemailer.createTransport(this.options);
  }

  async send(
    from: string,
    to: string,
    subject: string,
    content: string,
  ): Promise<nodemailer.SentMessageInfo> {
    const params = {
      from: from,
      to: to,
      subject: subject,
      text: content,
    };

    return this.transporter.sendMail(params);
  }
}
