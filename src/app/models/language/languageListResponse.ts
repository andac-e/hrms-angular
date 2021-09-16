import { Language } from './language';

export interface LanguageListResponse {
  success: boolean;
  message: string;
  data: Language[];
}
