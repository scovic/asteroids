import { Link } from "react-router-dom";
import { Asteroid } from "../model/asteroid.model";
import { setParam } from "../util/path";
import { RouterPaths } from "../Router";

type AsteroidProps = {
  asteroid: Asteroid;
}

function AsteroidListItem({ asteroid }: AsteroidProps) {
  const toRoute = setParam(RouterPaths.ASTEROID_DETAILS_PAGE_PATH, ":id", asteroid.id);
  return (
    <span>
      <Link to={toRoute}>{asteroid.name}</Link>
    </span>
  )
}

export default AsteroidListItem;
