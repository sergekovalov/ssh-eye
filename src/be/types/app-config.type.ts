export type TAppConfigConnection = {
  id: string;
  address: string;
  user: string;
  sshKeyPath: string;
}

export type TAppConfig = {
  connections: TAppConfigConnection[];
  commands: string[];
}