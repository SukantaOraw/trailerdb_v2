export interface TMDBMovie {
  id: number;
  title?: string;
  name?: string;

  overview: string;
  vote_average: number;

  backdrop_path: string | null;
  poster_path: string | null;

  release_date?: string;
  first_air_date?: string;

  genre_ids: number[]; // ✅ ADD THIS
}

export type TMDBResponse = {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
};
