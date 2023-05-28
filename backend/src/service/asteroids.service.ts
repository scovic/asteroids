import { ListAsteroidsQuery } from "../constants/list-asteroids-query.type";
import { BadRequestError } from "../errors/BadRequestError";
import { Asteroid } from "../models/asteroid.model";
import { IAsteroidRepository } from "../repository/asteroids.repository";
import { is7orLessDaysDiff } from "../utils/date";

export interface IAsteroidsService {
  listAsteroids(query: ListAsteroidsQuery): Promise<Asteroid[]>;
  getAsteroid(id: string): Promise<Asteroid>;
}

export class AsteroidsService implements IAsteroidsService {
  constructor(private readonly asteroidsRepository: IAsteroidRepository) {}

  public listAsteroids(query: ListAsteroidsQuery): Promise<Asteroid[]> {
    const { from, to } = query;

    let startDate = new Date();
    if (from) {
      startDate = new Date(from);
    }

    if ((from && to) || (!from && to)) {
      if (is7orLessDaysDiff(startDate, new Date(to))) {
        throw new BadRequestError("Time difference need to be 7 days or less");
      }
    }

    return this.asteroidsRepository.listAsteroids(query);
  }

  public getAsteroid(id: string): Promise<Asteroid> {
    return this.asteroidsRepository.getAsteroid(id);
  }
}