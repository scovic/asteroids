import { NextFunction, Request, Response } from "express";
import { IAsteroidsService } from "../service/asteroids.service";
import { BadRequestError } from "../errors/BadRequestError";
import { Asteroid } from "../models/asteroid.model";

export class AsteroidsController {
  constructor(private readonly asteroidsService: IAsteroidsService) {}

  public async listAsteroids(req: Request, resp: Response, next: NextFunction): Promise<void> {
    try {
      const asteroids = await this.asteroidsService.listAsteroids(req.query);

      resp.status(200).json({
        data: asteroids,
        status: 200
      });
    } catch (err) {
      next(err);
    }
  }

  public async getAsteroidDetails(req: Request, resp: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.params.id) {
        throw new BadRequestError("Must provide id of asteroid");
      }
      const asteroidDetails = await this.asteroidsService.getAsteroid(req.params.id);
  
      resp.status(200).json({
        data: asteroidDetails,
        status: 200
      });
    } catch (err) {
      next(err);
    }
  }
}
