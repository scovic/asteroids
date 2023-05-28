import { useEffect, useState } from "react";
import { Asteroid } from "../model/asteroid.model";
import config from "../config/conifg";
import { get } from "../axiosClient/client";

function useFavouriteList() {
  const [favouriteList, setFavouriteList] = useState<Asteroid[]>([]);

  async function fetchFavouriteList() {
    const url = `${config.apiUrl}/favourites`;
    const result = await get<Asteroid[]>(url);

    setFavouriteList(result.data);
  }


  useEffect(() => {
    fetchFavouriteList();
  }, [])


  return {
    favourites: favouriteList,
    fetchFavouriteList,
  }
}

export default useFavouriteList;
