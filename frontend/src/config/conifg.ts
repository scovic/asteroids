
export type ConfigType = {
  apiUrl: string;
}

const config: ConfigType = {
  apiUrl: process.env.REACT_APP_API_URL || "http://localhost:3010/api"
}

export default config;
