import MainCarousel from "@/app/components/carousel_main/MainCarousel";
import Cards from "@/app/components/Cards";
import NetworkCards from "@/app/components/NetworkCards";
import { MovieCardProps, Networks } from "@/app/types/type";

export default function HomePage() {

  const networks: Networks[] = [
    {
      title: "Netflix",
      img: "/networks/netflix.png",
    },
    {
      title: "Prime Video",
      img: "/networks/prime.png",
    },
    {
      title: "Disney+",
      img: "/networks/disney.png",
    },
    {
      title: "HBO Max",
      img: "/networks/hbo.png",
    },
    {
      title: "Apple TV+",
      img: "/networks/apple.png",
    },
    {
      title: "Hulu",
      img: "/networks/hulu.png",
    },
  ];

  const cards: MovieCardProps[] = [
    {
      title: "Oppenheimer",
      year: "2023",
      rating: "8.6",
      genre: ["Drama", "History", "Biography"],
    },
    {
      title: "Dune: Part Two",
      year: "2024",
      rating: "8.7",
      genre: ["Sci-Fi", "Adventure"],
    },
    {
      title: "The Dark Knight",
      year: "2008",
      rating: "9.0",
      genre: ["Action", "Crime", "Drama"],
    },
    {
      title: "Interstellar",
      year: "2014",
      rating: "8.7",
      genre: ["Sci-Fi", "Adventure", "Drama"],
    },
    {
      title: "Parasite",
      year: "2019",
      rating: "8.5",
      genre: ["Thriller", "Drama"],
    },
  ];

  return (
    <main className="home-main">
      <div className="flex">
        <section className="w-[70%] p-2">
          <MainCarousel />
        </section>

        <aside className="w-[30%] bg-olive-800 p-2">
          <p>Trending Discussions</p>
        </aside>
      </div>

      <section className="this-week p-2 gap-4 flex flex-col">
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
