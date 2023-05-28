import express from "express";
import morgan from "morgan";
import cors from "cors";
import { routes } from "./routes/index.routes";
import { App } from "./app";
import { errorHandlerMiddleware } from "./middlewares/error-handler.middleware";
import { ConfigType } from "./config/config";

export function startServer(application: App, config: ConfigType): void {
  const app = express();

  app.use(cors({ origin: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));

  app.use("/api", routes(application));
  app.use(errorHandlerMiddleware);

  app.listen(config.port, () => console.log(`App is running on localhost:${config.port}`));
}
