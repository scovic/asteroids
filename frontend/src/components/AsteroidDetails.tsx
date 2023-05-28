import { Asteroid } from "../model/asteroid.model"

type AsteroidDetailsProps = {
  asteroid: Asteroid
}

function AsteroidDetails({ asteroid }: AsteroidDetailsProps) {
  return (
    <div>
      <div>Name: {asteroid.name}</div>
      <div>Id: {asteroid.id}</div>
    </div>
  )
}

export default AsteroidDetails
