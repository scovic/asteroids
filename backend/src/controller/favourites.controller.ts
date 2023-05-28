import { NextFunction, Request, Response } from "express";
import { Asteroid } from "../models/asteroid.model";
import { IFavouritesService } from "../service/favourites.service";
import { IAsteroidsService } from "../service/asteroids.service";

export class FavouritesController {
  constructor(
    private readonly favouritesService: IFavouritesService,
    private readonly asteroidService: IAsteroidsService,
  ) {}

  public listFavourites(req: Request, resp: Response, next: NextFunction): void {
    try {
      const favourites = this.favouritesService.listFavourites();

      resp.status(200).json({
        data: favourites,
        status: 200
      });
    } catch (err) {
      next(err);
    }
   
  }

  public getAsteroidFavourite(req: Request, resp: Response, next: NextFunction): void {
    try {
      const asteroid = this.favouritesService.getFavourite(req.params.id);

      resp.status(200).json({
        data: asteroid,
        status: 200
      })
    } catch (err) {
      next(err);
    }
  }

  public async addAsteroidToFavourite(req: Request, resp: Response, next: NextFunction): Promise<void> {
    try {
      const asteroid = await this.asteroidService.getAsteroid(req.params.id);
      const favourieAsteroid = this.favouritesService.saveToFavorites(asteroid);

      resp.status(201).json({
        data: favourieAsteroid,
        status: 201
      })
    } catch (err) {
      next(err);
    }
  }
}