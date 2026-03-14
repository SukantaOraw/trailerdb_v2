import { useCallback, useEffect, useRef, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseAutoplayProgressType = {
  showAutoplayProgress: boolean;
};

export const useAutoplayProgress = <ProgressElement extends HTMLElement>(
  emblaApi: EmblaCarouselType | undefined,
  progressNode: React.RefObject<ProgressElement | null>,
): UseAutoplayProgressType => {
  const [showAutoplayProgress, setShowAutoplayProgress] = useState(false);

  const animationName = useRef("");
const timeoutId = useRef<number | null>(null);
const rafId = useRef<number | null>(null);

  const startProgress = useCallback(
    (timeUntilNext: number | null) => {
      const node = progressNode.current;

      if (!node || timeUntilNext === null) return;

      if (!animationName.current) {
        const style = window.getComputedStyle(node);
        animationName.current = style.animationName;
      }

      node.style.animationName = "none";
      node.style.transform = "translate3d(0,0,0)";

      rafId.current = requestAnimationFrame(() => {
        timeoutId.current = window.setTimeout(() => {
          node.style.animationName = animationName.current;
          node.style.animationDuration = `${timeUntilNext}ms`;
        }, 0);
      });

      setShowAutoplayProgress(true);
    },
    [progressNode],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins()?.autoplay;
    if (!autoplay) return;

    const onTimerSet = () => {
      startProgress(autoplay.timeUntilNext());
    };

    const onTimerStopped = () => {
      setShowAutoplayProgress(false);
    };

    const onPlay = () => {
      startProgress(autoplay.timeUntilNext());
    };

    const onStop = () => {
      setShowAutoplayProgress(false);
    };

    emblaApi
      .on("autoplay:timerset", onTimerSet)
      .on("autoplay:timerstopped", onTimerStopped)
      .on("autoplay:play", onPlay)
      .on("autoplay:stop", onStop);
  }, [emblaApi, startProgress]);

  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return {
    showAutoplayProgress,
  };
};
