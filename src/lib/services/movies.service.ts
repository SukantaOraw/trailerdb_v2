import { tmdbApi } from "@/lib/api/tmdb";
import { TMDBResponse } from "@/lib/types/tmdb.types";
import { SliderProps } from "../../app/types/types";
import { TMDB_IMAGE, TMDB_GENRES } from "@/lib/constants/tmdb.constants";

export async function getTrendingMovies(): Promise<SliderProps[]> {
  const data = (await tmdbApi.getTrendingMovies()) as TMDBResponse;

  return data.results.slice(0, 20).map((movie) => ({
    title: movie.title || "",
    year: (movie.release_date || "").slice(0, 4),
    rating: movie.vote_average.toFixed(1),
    genre: movie.genre_ids?.map((id) => TMDB_GENRES[id]) || [],
    description: movie.overview,
    backdrop: `${TMDB_IMAGE}${movie.backdrop_path}`,
  }));
}


