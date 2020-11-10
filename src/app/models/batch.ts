interface Option {
  name: string;
  value: string;
  disabled: boolean;
}

export interface Batch {
  id?: number;
  code: string;
  producer: string;
  produce_date: Date;
  shelf_life: Date;
  size: string;
}
