import { Product } from './product';

export interface ApiResponseProducts {
  next_page: number;
  prev_page: number;
  page_size: number;
  count_results: number;

  results: Product[];
}
