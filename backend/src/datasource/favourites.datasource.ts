import { Asteroid } from "../models/asteroid.model";

type FavouriteDatasourceRecord = {
  [id: string]: Asteroid
}

export class FavouritesDatasource {
  private readonly favourites: FavouriteDatasourceRecord = {};

  public listFavourites(): Asteroid[] {
    return Object.values(this.favourites);
  }

  public addFavourite(asteroid: Partial<Asteroid>): Asteroid {
    if (this.recordExists(asteroid.id)) {
      return {
        id: asteroid.id,
        name: asteroid.name,
      };
    }

    const favouriteAsteroid = {
      id: asteroid.id,
      name: asteroid.name,
    };

    this.favourites[asteroid.id] =favouriteAsteroid;

    return favouriteAsteroid;
  }

  public getFavourite(id: string): Asteroid | null {
    return this.favourites[id] ?? null;
  }

  private recordExists(id?: string): boolean {
    return !!(id && this.favourites[id]);
  }
}
