import { Link } from "react-router-dom";
import AsteroidList from "../components/AsteroidList";
import { useAsteroidList } from "../hooks/useAsteroidList";
import { useSaveToFavourite } from "../hooks/useSaveToFavourite";
import { RouterPaths } from "../Router";
import { useEffect, useState } from "react";
import QueryAndSort from "../components/QueryAndSort";
import { SortOption } from "../constants/sort-otpions";

function AsteroidListPage() {
  const { asteroids,  fetchAsteroidList } = useAsteroidList();
  const saveToFavourite = useSaveToFavourite();
  const [sortByNameValue, setSortByNameValue] = useState<string>(SortOption.ASC);
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  useEffect(
    () => {
      fetchAsteroidList({
        sortByName: sortByNameValue,
        from: fromDate,
        to: toDate
      });
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sortByNameValue, fromDate, toDate]
  );

  const handleSortByNameChange = (sortValue: string) => {
    setSortByNameValue(sortValue);
  }

  const handleFromDateChange = (fromDate: string) => {
    setFromDate(fromDate);
  }

  const handleToDateChange = (toDate: string) => {
    setToDate(toDate);
  }

  return (
    <div>
      <Link to={RouterPaths.FAVOURITES_LIST_PAGE_PATH}>
        Go to favourites
      </Link>
      <QueryAndSort 
        selectedNameSort={sortByNameValue}
        dateFrom={fromDate}
        dateTo={toDate}
        onSelectNameSortChange={handleSortByNameChange}
        onDateFromChange={handleFromDateChange}
        onDateToChange={handleToDateChange}
      />
      <AsteroidList 
        addAsteroidToFavourite={saveToFavourite} 
        asteroids={asteroids} 
      />
    </div>
    
  )
}

export default AsteroidListPage;
