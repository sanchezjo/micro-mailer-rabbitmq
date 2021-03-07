export interface ITransporteurOptions {
  host: string;
  port: number;
  auth: IAuth;
  tls: any;
}

export interface IAuth {
  user: string;
  pass: string;
}
