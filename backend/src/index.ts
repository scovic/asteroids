import { App } from "./app";
import { startServer } from "./server";
import config from "./config/config";

function start(): void {
  startServer(new App(config), config);
}

start();
