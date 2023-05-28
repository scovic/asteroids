import { SortOption } from "./sort-option.enum";

export type ListAsteroidsQuery = {
  name?: SortOption

  from?: string;

  to?: string
}