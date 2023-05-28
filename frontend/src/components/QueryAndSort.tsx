import { SortOption } from "../constants/sort-otpions";

type QueryAndSortProps = {
  selectedNameSort: string;
  dateFrom: string;
  dateTo: string;
  onSelectNameSortChange: (value: string) => void;
  onDateFromChange: (value: string) => void;
  onDateToChange: (value: string) => void;
}

function QueryAndSort({
  selectedNameSort,
  dateFrom,
  dateTo,
  onSelectNameSortChange,
  onDateFromChange,
  onDateToChange
}: QueryAndSortProps) {
  return (
    <div>
      <div style={{ padding: "4px" }}>
        <label style={{ marginRight: "4px" }} htmlFor="sort-by-name">
          Sort by name
        </label>
        <select 
          id="sort-by-name" 
          value={selectedNameSort} 
          onChange={(event) => onSelectNameSortChange(event.target.value)}
        >
          <option value={SortOption.ASC}>Asc</option>
          <option value={SortOption.DESC}>Desc</option>
        </select>
      </div>
      <div style={{ padding: "4px" }}>
        <label style={{ marginRight: "4px" }} htmlFor="date-from">
          From:
        </label>
        <input 
          id="date-from"
          onChange={event => onDateFromChange(event.target.value)} 
          type="date"
          value={dateFrom}
        />
      </div>
      <div style={{ padding: "4px" }}>
        <label style={{ marginRight: "4px" }} htmlFor="date-to">
          To:
        </label>
        <input 
          id="date-to" 
          onChange={event => onDateToChange(event.target.value)} 
          type="date"
          value={dateTo}
        />
      </div>
    </div>
  )
}

export default QueryAndSort;
