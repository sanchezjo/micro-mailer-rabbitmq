import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail.service';
import { getTheStdTransportOption } from './utils/config';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    MailService,
    { provide: 'options.transport', useValue: getTheStdTransportOption() },
  ],
})
export class AppModule {}
