import * as dotenv from "dotenv";
dotenv.config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  CORS: process.env.CORS || "*",
  AUTH_JWT_SECRET: process.env.AUTH_JWT_SECRET || "AUTH_JWT_SECRET",
};

export { config };
