import { City } from './city';

export interface CityListResponse {
  success: boolean;
  message: string;
  data: City[];
}
