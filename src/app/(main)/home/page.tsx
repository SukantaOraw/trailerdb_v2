"use client";

import Cards from "@/app/my_components/Cards";
import NetworkCards from "@/app/my_components/NetworkCards";
import Carousel from "@/app/my_components/Carousel/Carousel";

import { MovieCardProps, Networks } from "@/app/types/types";
import { useTrendingAll } from "@/lib/queries/movies.queries";

export default function HomePage() {
  const { data: movies, isPending, error } = useTrendingAll();

  console.log("movies:", movies);

  if (isPending) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4">Failed to load movies</p>;

  const networks: Networks[] = [
    {
      id: 1,
      name: "Netflix",
      logo_path: "/networks/netflix.png",
      origin_country: "US",
    },
  ];

  const cards: MovieCardProps[] = [
    {
      title: "Oppenheimer",
      src: "/networks/netflix.png",
      year: "2023",
      rating: "8.6",
      genre: ["Drama", "History"],
    },
  ];

  return (
    <main className="p-1 space-y-1">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <section className="lg:col-span-7">
          <Carousel carouselCards={movies} />
        </section>

        <aside className="lg:col-span-3 bg-neutral-800 p-4 rounded-xl lg:aspect-[8/10.9]">
          <p className="text-lg font-semibold">Trending Discussions</p>
        </aside>
      </div>

      <section>
        <p className="text-lg font-semibold mb-2">This Week</p>
        <Cards cards={cards} />
      </section>

      <section>
        <p className="text-lg font-semibold mb-2">Networks</p>
        <NetworkCards networks={networks} />
      </section>
    </main>
  );
}
