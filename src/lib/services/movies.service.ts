import { tmdbApi } from "@/lib/api/tmdb";
import { TMDBResponse } from "@/lib/types/tmdb.types";
import { SliderProps } from "@/app/types/type";
import { TMDB_IMAGE, TMDB_GENRES } from "@/lib/constants/tmdb.constants";

export async function getTrendingMovies(): Promise<SliderProps[]> {
  const data = (await tmdbApi.getTrending()) as TMDBResponse;

  return data.results.slice(0, 6).map((movie) => ({
    title: movie.title || movie.name || "",
    year: (movie.release_date || movie.first_air_date || "").slice(0, 4),
    rating: movie.vote_average.toFixed(1),
    genre: movie.genre_ids?.map((id) => TMDB_GENRES[id]) || [],
    description: movie.overview,
    backdrop: `${TMDB_IMAGE}${movie.backdrop_path}`,
  }));
}
