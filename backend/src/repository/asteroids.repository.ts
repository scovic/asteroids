import { ListAsteroidsQuery } from "../constants/list-asteroids-query.type";
import { SortOption } from "../constants/sort-option.enum";
import { AsteroidData, AsteroidsDatasource } from "../datasource/asteroids.datasource";
import { Asteroid } from "../models/asteroid.model";

export interface IAsteroidRepository{
  listAsteroids(query: ListAsteroidsQuery): Promise<Asteroid[]>;
  getAsteroid(id: string): Promise<AsteroidData>;
}

export class AsteroidsRepository implements IAsteroidRepository {
  constructor(private readonly asteroidsDatasource: AsteroidsDatasource) {}

  public async listAsteroids(query: ListAsteroidsQuery): Promise<Asteroid[]> {
    const asteroids = (await this.asteroidsDatasource.getAsteroidList({ fromDate: query.from, toDate: query.to }))
      .map(asteroidData => ({ 
        id: asteroidData.id, 
        name: asteroidData.name
      }) as Asteroid);

    if (query.name) {
      asteroids.sort(() => query.name === SortOption.ASC ? 1 : -1);  
    }

    return asteroids;
  }

  public async getAsteroid(id: string): Promise<Asteroid> {
    const asteroidData = await this.asteroidsDatasource.getAsteroid(id);
    
    return {
      id: asteroidData.id,
      name: asteroidData.name
    } as Asteroid;
  }
}
