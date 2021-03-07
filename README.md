# Micro-Mailer-Rabbit

## What it is for
**build a microservice build on a [Nest](https://nestjs.com) framework  that treat the message from a rabbitmq queue to send mail**

*Not yet ready for production purpose*
## How to set-up
- add a .env file on the top of the app with :

```txt
ENV=DEV

# smtp options use by default or if env=DEV
DEV_STD_SMTP_HOST=smtp.myprovider.com
DEV_STD_SMTP_PORT=465orOther
DEV_STD_SMTP_USER=thecontact@email.com
DEV_STD_SMTP_PASS=1234OrMoreSecure

# smtp options use if env=PROD
STD_SMTP_HOST=smtp.myprovider.com
STD_SMTP_PORT=465orOther
STD_SMTP_USER=thecontact@email.com
STD_SMTP_PASS=1234OrMoreSecure

# rabbit
RABBIT_URL=amqps://url:to:your:rabbit
RABBIT_QUEUE=the_queue_name
```

- docker-compose it

- on client side:
````typescript
    return this.clientRabbit.send('mail.create', {
      from: 'contact@contact.com',
      to: 'john.doe@gmail.com',
      subject: 'I know U',
      text: '...'
    });
````

- enjoy!
