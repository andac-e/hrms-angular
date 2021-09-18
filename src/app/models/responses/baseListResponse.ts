export interface BaseListResponse<T> {
  success: boolean;
  message: string;
  data: T[];
}
