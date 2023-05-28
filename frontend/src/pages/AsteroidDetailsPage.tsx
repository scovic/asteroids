import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAsteroidDetails } from "../hooks/useAsteroidDetails";
import { RouterPaths } from "../Router";
import AsteroidDetails from "../components/AsteroidDetails";
import { Link } from "react-router-dom";

function AsteroidDetailsPage() {
  const { id } = useParams();
  const { asteroid, isFetching } = useAsteroidDetails(id);
  const navigate = useNavigate()

  if (isFetching) {
    return null;
  }
  if (!asteroid) {
    return  <Navigate replace={true} to={RouterPaths.MATCH_ANYTHING_PATH} />
  }

  return (
    <div>
      <AsteroidDetails asteroid={asteroid} />
      <div>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
      <Link to={RouterPaths.ASTEROID_LIST_PAGE_PATH}>Back to home page</Link>
    </div>
    
  )
}

export default AsteroidDetailsPage;
