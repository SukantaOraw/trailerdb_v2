// api/tmdb.ts
import { TMDB } from "../constants/tmdb.constants"

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

async function request(url: string) {
  const res = await fetch(`${url}?api_key=${API_KEY}`);

  if (!res.ok) {
    throw new Error("TMDB request failed");
  }

  return res.json();
}

export const tmdbApi = {
  getTrending: () => request(TMDB.trending),
  getMovies: () => request(TMDB.movies),
};
