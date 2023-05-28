import { Asteroid } from "../models/asteroid.model";
import { IFavouritesRepository } from "../repository/favourites.repostiroy";

export interface IFavouritesService {
  listFavourites(): Asteroid[];
  saveToFavorites(asteroid: Asteroid): Asteroid;
  getFavourite(asteroidId: string): Asteroid;
}

export class FavouritesService implements IFavouritesService {
  constructor(private readonly favouritesRepository: IFavouritesRepository) {}

  public listFavourites(): Asteroid[] {
    return this.favouritesRepository.listFavourites();
  }

  public saveToFavorites(asteroid: Asteroid): Asteroid {
    return this.favouritesRepository.addAsteroidFavourite(asteroid);
  }

  public getFavourite(asteroidId: string): Asteroid {
    return this.favouritesRepository.getFavouriteById(asteroidId);
  }
}