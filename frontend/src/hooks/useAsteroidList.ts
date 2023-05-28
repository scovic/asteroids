import { useEffect, useState } from "react";
import { Asteroid } from "../model/asteroid.model";
import config from "../config/conifg";
import { get } from "../axiosClient/client";  
import { SortOption } from "../constants/sort-otpions";
import { getQueryString } from "../util/query";

export type QueryParams = {
  from?: string;
  to?: string;
  sortByName?: string;
}

export function useAsteroidList() {
  const [asteroidList, setAsteroidList] = useState<Asteroid[]>([]);

  async function fetchList(query: QueryParams) {
    const querystring = getQueryString(query);
    const url = `${config.apiUrl}/asteroids?${querystring}`;
    const result = await get<Asteroid[]>(url)

    setAsteroidList(result.data);
  }

  useEffect(() => {
    fetchList({
      sortByName: SortOption.ASC,
    })
  }, [])

  return {
    asteroids: asteroidList,
    fetchAsteroidList: fetchList,
  };
}
