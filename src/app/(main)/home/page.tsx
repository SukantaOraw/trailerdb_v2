
import Cards from "@/app/components/Cards";
import NetworkCards from "@/app/components/NetworkCards";
import { MovieCardProps, Networks, SliderProps } from "@/app/types/type";
import Carousel from "@/app/components/Carousel/Carousel";

export default function HomePage() {

  const carouselData: SliderProps[] = [
    {
      title: "Oppenheimer",
      year: "2023",
      rating: "8.6",
      genre: ["Drama", "History", "Biography"],
      description:
        "The story of J. Robert Oppenheimer and the development of the atomic bomb during World War II.",
    },
    {
      title: "Dune: Part Two",
      year: "2024",
      rating: "8.7",
      genre: ["Sci-Fi", "Adventure"],
      description:
        "Paul Atreides unites with the Fremen to wage war against the conspirators who destroyed his family.",
    },
    {
      title: "The Dark Knight",
      year: "2008",
      rating: "9.0",
      genre: ["Action", "Crime", "Drama"],
      description:
        "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos.",
    },
    {
      title: "Interstellar",
      year: "2014",
      rating: "8.7",
      genre: ["Sci-Fi", "Adventure", "Drama"],
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      title: "Parasite",
      year: "2019",
      rating: "8.5",
      genre: ["Thriller", "Drama"],
      description:
        "A poor family schemes to become employed by a wealthy family by infiltrating their household.",
    },
  ];

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
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <section className="lg:col-span-7 rounded-xl overflow-hidden">
          <Carousel carouselCards={carouselData} />
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
