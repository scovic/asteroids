import * as dotenv from 'dotenv';
dotenv.config();

export type ConfigType = {
  port: number;
  apiKey: string;
}

const config: ConfigType = {
  port: Number(process.env.BACKEND_CONTAINER_PORT) || 3010,
  apiKey: process.env.API_KEY || "DEMO_KEY"
}

export default config;
