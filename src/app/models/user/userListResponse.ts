import { User } from './user';

export interface UserListResponse {
  success: boolean;
  message: string;
  data: User[];
}
