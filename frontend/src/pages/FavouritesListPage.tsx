import { Link } from "react-router-dom";
import FavouriteList from "../components/FavouriteList";
import useFavouriteList from "../hooks/useFavouirteList";
import { RouterPaths } from "../Router";


function FavouritesListPage() {
  const { favourites } = useFavouriteList();

  return (
    <div>
      <FavouriteList asteroids={favourites} />
      <Link to={RouterPaths.ASTEROID_LIST_PAGE_PATH}>Go to home page</Link>
    </div>
  )
}

export default FavouritesListPage;