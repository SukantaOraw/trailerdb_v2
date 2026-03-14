"use client";

import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";

export default function MainCarousel() {

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
