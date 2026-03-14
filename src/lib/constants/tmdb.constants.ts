const BASE_URL = "https://api.themoviedb.org/3";

export const TMDB = {
  trending_all_week: `${BASE_URL}/trending/all/week`,
  trending_movies_week: `${BASE_URL}/trending/movie/week`,
  movies: `${BASE_URL}/discover/movie`,
  series: `${BASE_URL}/discover/tv`,
};

export const TMDB_IMAGE = "https://image.tmdb.org/t/p/original";

export const TMDB_LOGO = "https://image.tmdb.org/t/p/w200";

export const TMDB_GENRES: Record<number, string> = {
  // Movie genres
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  53: "Thriller",
  10752: "War",
  37: "Western",

  // TV genres
  10759: "Action & Adventure",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
};
