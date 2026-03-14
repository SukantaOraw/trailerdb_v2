export type SliderProps = {
  title: string;
  year: string;
  rating: string;
  genre: string[];
  description: string;
  backdrop: string;
};

export type Networks = {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
};

export type MovieCardProps = {
  title: string;
  src: string | null;
  year: string;
  rating: string;
  genre: string[];
};