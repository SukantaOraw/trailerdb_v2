import { TMDB } from "../constants/tmdb.constants";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

async function request(url: string) {
  const apiUrl = new URL(url);

  apiUrl.searchParams.set("api_key", API_KEY as string);

  console.log("TMDB REQUEST:", apiUrl.toString());

  const res = await fetch(apiUrl.toString(), {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error("TMDB request failed:", res.status);
    throw new Error("TMDB request failed");
  }

  return res.json();
}

export const tmdbApi = {
  getTrendingAll: () => request(TMDB.trending_all_day),
  getTrendingMovies: () => request(TMDB.trending_movies_week),
  getMovies: () => request(TMDB.movies),
  getSeries: () => request(TMDB.series),
};
