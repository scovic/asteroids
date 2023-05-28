import { FavouritesDatasource } from "./datasource/favourites.datasource";
import { AsteroidsDatasource } from "./datasource/asteroids.datasource";
import { FavouritesRepository, IFavouritesRepository } from "./repository/favourites.repostiroy";
import { AsteroidsRepository, IAsteroidRepository } from "./repository/asteroids.repository";
import { FavouritesService, IFavouritesService } from "./service/favourites.service";
import { AsteroidsService, IAsteroidsService } from "./service/asteroids.service";
import { AsteroidsController } from "./controller/asteroids.controller";
import { FavouritesController } from "./controller/favourites.controller";
import { ConfigType } from "./config/config";

export class App {
  private asteroidsController: AsteroidsController;
  private favouritesController: FavouritesController;

  constructor(config: ConfigType) {
    this.setupApp(config);
  }
  
  private setupApp(config: ConfigType): void {
    const asteroidsDatasource: AsteroidsDatasource = new AsteroidsDatasource(config.apiKey);
    const favouritesDatasource: FavouritesDatasource = new FavouritesDatasource();

    const asteroidsRepository: IAsteroidRepository = new AsteroidsRepository(asteroidsDatasource);
    const favouritesRepository: IFavouritesRepository = new FavouritesRepository(favouritesDatasource)

    const asteroidsService: IAsteroidsService = new AsteroidsService(asteroidsRepository);
    const favouritesService: IFavouritesService = new FavouritesService(favouritesRepository);

    this.asteroidsController = new AsteroidsController(asteroidsService);
    this.favouritesController = new FavouritesController(favouritesService, asteroidsService);
  }

  public getAsteroidsController(): AsteroidsController {
    return this.asteroidsController;
  }

  public getFavouritesController(): FavouritesController {
    return this.favouritesController;
  }
}
