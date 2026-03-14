"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getTrendingMovies,
} from "@/lib/services/movies.service";

import { getTrendingAll } from "@/lib/services/trending.service";
import { SliderProps } from "@/app/types/types";

export const movieKeys = {
  all: ["movies"] as const,

  trendingAll: () => [...movieKeys.all, "trending-all"] as const,

  trendingMovies: () => [...movieKeys.all, "trending-movies"] as const,
};

export function useTrendingAll() {
  return useQuery<SliderProps[]>({
    queryKey: movieKeys.trendingAll(),
    queryFn: getTrendingAll,
    staleTime: 1000 * 60 * 5,
  });
}

export function useTrendingMovies() {
  return useQuery<SliderProps[]>({
    queryKey: movieKeys.trendingMovies(),
    queryFn: getTrendingMovies,
    staleTime: 1000 * 60 * 5,
  });
}
