import { Router } from "express";
import { App } from "../app";
import { asteroidsRoutes } from "./asteroids.routes";
import { favouritesRoutes } from "./favourites.routes";

export function routes(app: App): Router {
  const router = Router();

  router.use("/asteroids", asteroidsRoutes(app.getAsteroidsController()));
  router.use("/favourites", favouritesRoutes(app.getFavouritesController()));

  return router;
}
