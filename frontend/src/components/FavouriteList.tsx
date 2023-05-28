import { Asteroid } from "../model/asteroid.model";
import AsteroidListItem from "./AsteroidListItem";

type FavouriteListProps = {
  asteroids: Asteroid[];
}

function FavouriteList({ asteroids }: FavouriteListProps) {
  if (asteroids.length === 0) {
    return <div>No favourites yet</div>
  }

  return (
    <div>
      <ul>
        {asteroids.map(astr => (
          <div>
            <span style={{ marginRight: "4px" }}>
              <AsteroidListItem asteroid={astr} />
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteList;
