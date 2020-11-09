import { Batch } from './batch';

export interface ApiResponseBatches {
  next_page: number;
  prev_page: number;
  page_size: number;
  count_results: number;

  results: Batch[];
}
