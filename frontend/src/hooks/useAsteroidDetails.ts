import { useEffect, useState } from "react";
import { Asteroid } from "../model/asteroid.model";
import config from "../config/conifg";
import { get } from "../axiosClient/client";
import { useDataFetcherState } from "./useDataFetcher";

export function useAsteroidDetails(id: string | null) {
  const [asteroid, setAsteroid] = useState<Asteroid | null>(null);
  const { isIdle, isInProgress, inProgress, completed } = useDataFetcherState();

  async function fetchAsteroid(asteroidId: string) {
    const url = `${config.apiUrl}/asteroids/${asteroidId}`;
    inProgress();
    const result = await get<Asteroid>(url);
    setAsteroid(result.data);
    completed()
  }

  useEffect(() => {
    if (id === null) {
      return setAsteroid(null);
    }

    fetchAsteroid(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    asteroid,
    isFetching: isIdle() || isInProgress()
  };
}
