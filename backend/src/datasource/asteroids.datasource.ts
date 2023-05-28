import axios from "axios";

type GetAsteroidListQuery = {
  fromDate?: string;
  toDate?: string;
}

export type AsteroidData = {
  id: string;
  name: string;
}

export type GetAstreoidListResult = {
  near_earth_objects: {
    [date: string]: AsteroidData[]
  }
}

export class AsteroidsDatasource {
  private readonly datasourceUrl: string;
  private readonly apiKey: string;

  constructor(apiKey: string = "DEMO_KEY") {
    this.datasourceUrl = `https://api.nasa.gov/neo/rest/v1`;
    this.apiKey = apiKey;
  }

  public async getAsteroidList(query: GetAsteroidListQuery): Promise<AsteroidData[]> {
    const url = `${this.datasourceUrl}/feed?api_key=${this.apiKey}&${this.getQueryString(query)}`;
    const result = await axios.get(url);
    const data = result.data;

    return Object.keys(data.near_earth_objects)
      .flatMap(
        date => data.near_earth_objects[date].map(obj => ({ ...obj }) as AsteroidData)
      );
  }

  public async getAsteroid(id: string): Promise<AsteroidData> {
    const url = `${this.datasourceUrl}/neo/${id}?api_key=${this.apiKey}`
    const result = await axios.get(url);

    return result.data as AsteroidData;
  }

  private getQueryString(query: GetAsteroidListQuery): string {
    if (query.fromDate && query.toDate) {
      return `start_date=${this.getDateFormat(query.fromDate)}&end_date=${this.getDateFormat(query.toDate)}`;
    } else if (query.fromDate) {
      return `start_date=${this.getDateFormat(query.fromDate)}`
    } else  if (query.toDate) {
      return `end_date=${this.getDateFormat(query.toDate)}` 
    } else {
      return "";
    }
  }

  private getDateFormat(value: string | number): string {
    const date = new Date(value);
    console.log(date.getMonth())
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
}
