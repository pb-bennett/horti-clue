declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DB_URI: string;
    DB_PW: string;
    JWT_SECRET: string;
  }
}
