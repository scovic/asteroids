import { Router } from "express";
import { FavouritesController } from "../controller/favourites.controller";

export function favouritesRoutes(favouritesController: FavouritesController): Router {
  const router = Router();

  router.get("/", (req, res, next) => favouritesController.listFavourites(req, res, next));
  router.get("/:id", (req, res, next) => favouritesController.getAsteroidFavourite(req, res, next));
  router.put("/:id", (req, res, next) => favouritesController.addAsteroidToFavourite(req, res, next));

  return router;
}