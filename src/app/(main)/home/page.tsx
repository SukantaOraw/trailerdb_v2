"use client";

import Cards from "@/app/components/Cards";
import NetworkCards from "@/app/components/NetworkCards";
import { MovieCardProps, Networks, SliderProps } from "@/app/types/type";
import Carousel from "@/app/components/Carousel/Carousel";

import { useTrendingMovies } from "@/lib/queries/movies.queries";

export default function HomePage() {
  const { data, isPending, error } = useTrendingMovies();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Failed to load movies</p>;

  const networks: Networks[] = [
    {
      title: "Netflix",
      img: "/networks/netflix.png",
    }
  ];

  const cards: MovieCardProps[] = [
    {
      title: "Oppenheimer",
      year: "2023",
      rating: "8.6",
      genre: ["Drama", "History", "Biography"],
    },
  ];

  return (
    <main className="home-main">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <section className="lg:col-span-7 rounded-xl overflow-hidden">
          <Carousel carouselCards={data ?? []} />
        </section>

        <aside className="lg:col-span-3 bg-olive-800 p-4 rounded-xl">
          <p className="text-lg font-semibold">Trending Discussions</p>
        </aside>
      </div>

      <section className="this-week p-2 gap-4 flex flex-col ">
        <p>This Week</p>
        <Cards cards={cards} />
      </section>

      <section className="networks p-2 flex flex-col gap-2">
        <p>Networks</p>
        <NetworkCards networks={networks} />
      </section>
    </main>
  );
}
