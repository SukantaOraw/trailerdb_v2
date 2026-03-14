import { tmdbApi } from "@/lib/api/tmdb";
import { TMDBResponse } from "@/lib/types/tmdb.types";
import { SliderProps } from "../../app/types/types";
import { TMDB_IMAGE, TMDB_GENRES } from "@/lib/constants/tmdb.constants";

export async function getTrendingAll(): Promise<SliderProps[]> {
  const data = (await tmdbApi.getTrendingAll()) as TMDBResponse;

  return data.results
    .filter((item) => item.media_type !== "person")
    .slice(0, 20)
    .map((item) => ({
      title: item.title || item.name || "",
      year: (item.release_date || item.first_air_date || "").slice(0, 4),
      rating: item.vote_average.toFixed(1),
      genre: item.genre_ids?.map((id) => TMDB_GENRES[id]) || [],
      description: item.overview,
      backdrop: `${TMDB_IMAGE}${item.backdrop_path}`,
    }));
}
