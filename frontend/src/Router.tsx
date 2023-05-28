import { Route, Routes } from "react-router-dom";
import AsteroidListPage from "./pages/AsteroidListPage";
import AsteroidDetailsPage from "./pages/AsteroidDetailsPage";
import FavouritesListPage from "./pages/FavouritesListPage";
import FavouriteDetailsPage from "./pages/FavouriteDetailsPage";
import NoMatchPage from "./pages/NoMatchPage";

export enum RouterPaths {
  ASTEROID_LIST_PAGE_PATH = "/",
  ASTEROID_DETAILS_PAGE_PATH = "/:id",
  FAVOURITES_LIST_PAGE_PATH = "/favourites",
  FAVOURITES_DETAILS_PAGE_PATH = "/favourites/:id",
  MATCH_ANYTHING_PATH = "*"
}

function Router() {
  return (
    <Routes>
      <Route path={RouterPaths.ASTEROID_LIST_PAGE_PATH} element={<AsteroidListPage />} />
      <Route path={RouterPaths.ASTEROID_DETAILS_PAGE_PATH} element={<AsteroidDetailsPage />} />
      <Route path={RouterPaths.FAVOURITES_LIST_PAGE_PATH} element={<FavouritesListPage />} />
      <Route path={RouterPaths.FAVOURITES_DETAILS_PAGE_PATH} element={<FavouriteDetailsPage />} />
      <Route path={RouterPaths.MATCH_ANYTHING_PATH} element={<NoMatchPage />} />
    </Routes>
  )
}

export default Router;