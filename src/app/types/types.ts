export interface Credential {
  username: string;
  password: string;
}

export interface Token {
  access: string;
  refresh: string;
}

export interface Usuario {
  id: number;
  username: string;
  nome_completo: string;
}

export interface Result<T> {
  count: number;
  has_next: boolean | null;
  has_previous: boolean | null;
  next_page_number: number | null;
  num_pages: number;
  page: number;
  page_range: number[];
  per_page: number;
  previous_page_number: number | null;
  results: T[];
}