"use client";

// import Image from "next/image";
import { SliderProps } from "@/app/types/type";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Image, Chip, CircularProgress } from "@heroui/react";

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

  const getColor = (value: number) => {
    const voteAverage = value * 10;

    if (voteAverage >= 75) return "success";
    if (voteAverage >= 50) return "warning";
    return "danger";
  };

  return (
    <div
      ref={sliderRef}
      className="keen-slider border-2 border-neutral-500 shadow-[0_0_18px_10px_rgba(0,0,0,0.3)] rounded-xl lg:aspect-[5/2] aspect-[3/1.7]"
    >
      {carouselCards.map((movie, index) => (
        <div
          key={index}
          className="keen-slider__slide relative flex items-end h-full"
        >
          {/* Background Image */}
          <Image
            src={movie.backdrop}
            alt={movie.title}
            className="absolute inset-0 w-full h-full object-cover"
            // radius="none"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-end justify-between p-4 md:p-6 gap-5">
            {/* LEFT SIDE */}
            <div className="text-left text-white flex flex-col gap-2">
              <h1 className="text-2xl md:text-5xl font-bold text-orange-600">
                {movie.title}
              </h1>

              <p className="text-xs md:text-base line-clamp-3 md:line-clamp-4 w-[90%] md:w-[80%] lg:w-[70%]">
                {movie.description}
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-3 items-end">
              <div className="bg-neutral-800/60 flex flex-col gap-2 rounded-full p-2">
                <CircularProgress
                  aria-label="Rating"
                  size="md"
                  value={Number(movie.rating) * 10}
                  color={getColor(Number(movie.rating))}
                  showValueLabel
                  className="text-white"
                  classNames={{
                    value: "text-[9px]",
                  }}
                />
              </div>

              <Chip
                size="md"
                variant="soft"
                // classNames={{
                //   base: "border border-purple-600 text-purple-500",
                // }}
              >
                {movie.genre.join(" • ")}
              </Chip>

              <Chip
                size="lg"
                variant="soft"
                // classNames={{
                //   base: "border border-blue-600 text-blue-500",
                // }}
              >
                {movie.year}
              </Chip>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
