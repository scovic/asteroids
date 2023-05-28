import { Router } from "express";
import { AsteroidsController } from "../controller/asteroids.controller";

export function asteroidsRoutes(asteroisController: AsteroidsController): Router {
  const router = Router();

  router.get("/", (req, res, next) => asteroisController.listAsteroids(req, res, next));
  router.get("/:id", (req, res, next) => asteroisController.getAsteroidDetails(req, res, next));

  return router;
}
