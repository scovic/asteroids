import { QueryParams } from "../hooks/useAsteroidList";

export function getQueryString(query: QueryParams): string {
  const { sortByName, from, to } = query;
  let queryString = "";

  if (sortByName) {
    queryString += `name=${sortByName}`;
  }

  if (from) {
    queryString += queryString ? `&from=${from}` : `from=${from}`;
  }

  if (to) {
    queryString += queryString ? `&to=${to}` : `to=${to}`;
  }

  return queryString
}
