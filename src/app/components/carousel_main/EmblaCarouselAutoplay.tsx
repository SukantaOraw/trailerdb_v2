import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseAutoplayType = {
  autoplayIsPlaying: boolean;
  toggleAutoplay: () => void;
  onAutoplayButtonClick: (callback: () => void) => void;
};

export const useAutoplay = (
  emblaApi: EmblaCarouselType | undefined,
): UseAutoplayType => {
  const [autoplayIsPlaying, setAutoplayIsPlaying] = useState(false);

  const getAutoplay = () => emblaApi?.plugins()?.autoplay;

  const onAutoplayButtonClick = useCallback(
    (callback: () => void) => {
      const autoplay = getAutoplay();
      if (!autoplay) return;

      autoplay.stop();
      callback();
    },
    [getAutoplay],
  );

  const toggleAutoplay = useCallback(() => {
    const autoplay = getAutoplay();
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
  }, [emblaApi]);

  useEffect(() => {
    const autoplay = getAutoplay();
    if (!emblaApi || !autoplay) return;

    setAutoplayIsPlaying(autoplay.isPlaying());

    const onPlay = () => setAutoplayIsPlaying(true);
    const onStop = () => setAutoplayIsPlaying(false);

    emblaApi.on("autoplay:play", onPlay);
    emblaApi.on("autoplay:stop", onStop);
    const onReInit = () => setAutoplayIsPlaying(autoplay.isPlaying());
    emblaApi.on("reinit", onReInit);
    return () => {
      emblaApi.off("autoplay:play", onPlay);
      emblaApi.off("autoplay:stop", onStop);
    };
  }, [emblaApi]);

  return {
    autoplayIsPlaying,
    toggleAutoplay,
    onAutoplayButtonClick,
  };
};
