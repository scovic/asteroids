import { useEffect, useState } from "react";
import { Asteroid } from "../model/asteroid.model";
import config from "../config/conifg";
import { get } from "../axiosClient/client";
import { useDataFetcherState } from "./useDataFetcher";

function useFavouriteDetails(id: string | null) {
  const [favourite, setFavourite] = useState<Asteroid | null>(null);
  const { isIdle, isInProgress, inProgress, completed } = useDataFetcherState();

  useEffect(() => {
    if (id === null) {
      return setFavourite(null);
    }

    async function fetchFavouriteDetails(asteroidId: string) {
      const url = `${config.apiUrl}/favourites/${asteroidId}`;
      inProgress();
      const result = await get<Asteroid>(url);
  
      return result.data;
    }

    fetchFavouriteDetails(id)
      .then(result => setFavourite(result))
      .then(() => completed());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    favourite: favourite,
    isFetcing: isIdle() && isInProgress()
  };
}

export default useFavouriteDetails;
