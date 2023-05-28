import { Asteroid } from "../model/asteroid.model"
import AsteroidListItem from "./AsteroidListItem";

type AsteroidListProps = {
  asteroids: Asteroid[];
  addAsteroidToFavourite: (asteroidId: string) => void
}

function AsteroidList({ asteroids, addAsteroidToFavourite }: AsteroidListProps) {
  return <ul style={{ listStyle: "none" }}>
    {asteroids.map(astr => (
      <li>
        <span style={{ marginRight: "4px" }}><AsteroidListItem asteroid={astr} /></span>
        <span>
          <button onClick={() => addAsteroidToFavourite(astr.id)}>
            Add to favourite
          </button>
        </span>
      </li>
    ))}
  </ul>
}

export default AsteroidList;
