import { FavouritesDatasource } from "../datasource/favourites.datasource";
import { NotFoundError } from "../errors/NotFoundError";
import { Asteroid } from "../models/asteroid.model";

export interface IFavouritesRepository {
  listFavourites(): Asteroid[];
  addAsteroidFavourite(favourite: Asteroid): Asteroid;
  getFavouriteById(favouriteId: string): Asteroid;
}

export class FavouritesRepository implements IFavouritesRepository {
  constructor(private readonly favouritesDatasource: FavouritesDatasource) {}

  public listFavourites(): Asteroid[] {
    return this.favouritesDatasource.listFavourites();
  }

  public addAsteroidFavourite(favourite: Asteroid): Asteroid {
    return this.favouritesDatasource.addFavourite(favourite);
  }

  public getFavouriteById(favouriteId: string): Asteroid {
    const asteroid = this.favouritesDatasource.getFavourite(favouriteId);
    if (!asteroid) {
      throw new NotFoundError("Asteroid not found");
    }

    return asteroid;
  }
}
