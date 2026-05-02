import { useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";
import type { RefObject } from "react";

export const useScrollAnimation = (ref: RefObject<Element>) => {
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return controls;
};
