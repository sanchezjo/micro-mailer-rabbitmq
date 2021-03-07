import * as dotenv from 'dotenv';
import { ITransporteurOptions } from '../types';

dotenv.config();

export const STD_SMTP_HOST = process.env.STD_SMTP_HOST;
export const STD_SMTP_PORT = Number(process.env.STD_SMTP_PORT);
export const STD_SMTP_USER = process.env.STD_SMTP_USER;
export const STD_SMTP_PASS = process.env.STD_SMTP_PASS;
export const DEV_STD_SMTP_HOST = process.env.DEV_STD_SMTP_HOST;
export const DEV_STD_SMTP_PORT = Number(process.env.DEV_STD_SMTP_PORT);
export const DEV_STD_SMTP_USER = process.env.DEV_STD_SMTP_USER;
export const DEV_STD_SMTP_PASS = process.env.DEV_STD_SMTP_PASS;

const STD_TRANSPORTER_OPTIONS: ITransporteurOptions = {
  host: STD_SMTP_HOST,
  port: STD_SMTP_PORT,
  auth: {
    user: STD_SMTP_USER,
    pass: STD_SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
};

const DEV_STD_TRANSPORTER_OPTIONS: ITransporteurOptions = {
  host: DEV_STD_SMTP_HOST,
  port: DEV_STD_SMTP_PORT,
  auth: {
    user: DEV_STD_SMTP_USER,
    pass: DEV_STD_SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
};

function getTheEnv() {
  const theEnv = process.env.ENV;
  if (!theEnv) {
    return 'DEV';
  }
  return theEnv;
}

export function getTheStdTransportOption(): ITransporteurOptions {
  if (getTheEnv() === 'DEV') {
    return DEV_STD_TRANSPORTER_OPTIONS;
  }

  if (getTheEnv() === 'PROD') {
    return STD_TRANSPORTER_OPTIONS;
  }

  return STD_TRANSPORTER_OPTIONS;
}

export const RABBIT_URL = process.env.RABBIT_URL;
export const RABBIT_QUEUE = process.env.RABBIT_QUEUE;
