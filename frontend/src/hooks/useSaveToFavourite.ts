import { put } from "../axiosClient/client";
import config from "../config/conifg";

export function useSaveToFavourite() {
  async function saveToFavourites(asteroidId: string) {
    const url = `${config.apiUrl}/favourites/${asteroidId}`;
    const result = await put(url);

    return result.data;
  }

  return saveToFavourites;
}