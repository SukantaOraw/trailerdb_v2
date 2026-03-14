"use client";

import { SliderProps } from "@/app/types/type";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type CarouselProps = {
  carouselCards: SliderProps[];
};

export default function Carousel({ carouselCards }: CarouselProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        const clearNextTimeout = () => {
          if (timeout) clearTimeout(timeout);
        };

        const nextTimeout = () => {
          clearNextTimeout();
          if (mouseOver) return;

          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        };

        const onMouseOver = () => {
          mouseOver = true;
          clearNextTimeout();
        };

        const onMouseOut = () => {
          mouseOver = false;
          nextTimeout();
        };

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", onMouseOver);
          slider.container.addEventListener("mouseout", onMouseOut);
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);

        slider.on("destroyed", () => {
          slider.container.removeEventListener("mouseover", onMouseOver);
          slider.container.removeEventListener("mouseout", onMouseOut);
          clearNextTimeout();
        });
      },
    ],
  );

  return (
    <div
      ref={sliderRef}
      className="keen-slider"
    >
      {carouselCards.map((movie, index) => (
        <div
          key={index}
          className="keen-slider__slide relative flex items-end h-full"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/placeholder.jpg')` }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative p-8 text-white max-w-xl">
            <h2 className="text-4xl font-bold">{movie.title}</h2>

            <div className="flex gap-4 text-sm text-gray-300 mt-2">
              <span>{movie.year}</span>
              <span>⭐ {movie.rating}</span>
              <span>{movie.genre.join(" • ")}</span>
            </div>

            <p className="mt-4 text-gray-200">{movie.description}</p>

            <button className="mt-6 px-5 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
