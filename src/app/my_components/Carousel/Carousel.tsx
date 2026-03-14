"use client";

import Image from "next/image";
import Slider from "react-slick";
import type { Settings } from "react-slick";

import { SliderProps } from "@/app/types/types";
import { Badge } from "@/components/ui/badge";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  carouselCards?: SliderProps[];
};

function NextArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 
      transition-all duration-300 ease-in-out bg-black/30
       hover:bg-black/50 text-white/50 hover:text-white/100 p-2 rounded-full"
    >
      <ChevronRight size={20} />
    </button>
  );
}

function PrevArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 
      transition-all duration-300 ease-in-out bg-black/30
       hover:bg-black/50 text-white/50 hover:text-white/100 p-2 rounded-full"
    >
      <ChevronLeft size={20} />
    </button>
  );
}

export default function Carousel({ carouselCards = [] }: CarouselProps) {
  if (!carouselCards.length) return null;

  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    arrows: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const getColor = (rating: number) => {
    if (rating >= 7.5) return "text-green-400 border-green-400";
    if (rating >= 5) return "text-yellow-400 border-yellow-400";
    return "text-red-400 border-red-400";
  };

  return (
    <div
      className="mySwiper border-2 border-neutral-500 shadow-[0_0_18px_10px_rgba(0,0,0,0.3)]
    rounded-xl aspect-[16/9] mb-4 
    [&_.slick-dots]:bottom-2
    [&_.slick-dots_li_button:before]:text-white"
    >
      <Slider
        key={carouselCards.length}
        {...settings}
        className="h-full [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-slide>div]:h-full"
      >
        {carouselCards.map((movie, index) => (
          <div key={`${movie.title}-${index}`} className="h-full">
            <div className="relative w-full h-full">
              {/* Image */}
              <Image
                src={movie.backdrop}
                alt={movie.title}
                fill
                priority
                sizes="(max-width:1024px) 100vw, 100vw"
                className="object-cover rounded-xl"
              />

              {/* Overlay */}
              <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black to-transparent z-10" />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex items-end justify-between p-4 gap-5">
                {/* LEFT */}
                <div className="text-left text-white flex flex-col gap-2">
                  <h1 className="text-2xl font-bold md:text-4xl text-orange-600">
                    {movie.title}
                  </h1>

                  <div className="flex gap-2 flex-wrap">
                    {movie.genre.map((g) => (
                      <Badge
                        key={g}
                        className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                      >
                        {g}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm line-clamp-3 md:line-clamp-4 w-[90%] md:w-[80%] lg:w-[70%]">
                    {movie.description}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-2 items-end">
                  <div
                    className={`w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 font-semibold bg-black/60 ${getColor(
                      Number(movie.rating),
                    )}`}
                  >
                    {movie.rating}
                  </div>

                  <Badge variant="outline">{movie.year}</Badge>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );

}