'use client'

import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "@/lib/services/movies.service";

export const movieKeys = {
  trending: ["movies", "trending"],
};

export function useTrendingMovies() {
  return useQuery({
    queryKey: movieKeys.trending,
    queryFn: getTrendingMovies,
    staleTime: 1000 * 60 * 5,
  });
}
