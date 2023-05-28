import { Navigate, useParams } from "react-router-dom";
import useFavouriteDetails from "../hooks/useFavouriteDetails";
import { RouterPaths } from "../Router";
import AsteroidDetails from "../components/AsteroidDetails";

function FavouriteDetailsPage() {
  const { id } = useParams();
  const { favourite, isFetcing } = useFavouriteDetails(id);

  if (isFetcing) {
    return null;
  }

  if (!favourite) {
    return <Navigate replace to={RouterPaths.MATCH_ANYTHING_PATH} />
  }

  return (
    <AsteroidDetails asteroid={favourite} />
  )
}

export default FavouriteDetailsPage;
