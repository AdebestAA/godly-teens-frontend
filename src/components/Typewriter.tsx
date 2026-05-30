import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface TypewriterProps {
  text: string;
  /** Characters per second (default ~60) */
  speed?: number;
  /** Delay before starting, in seconds */
  startDelay?: number;
  /** Whether to show a blinking cursor */
  showCursor?: boolean;
  className?: string;
  /** HTML tag to render */
  as?: keyof JSX.IntrinsicElements;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 60,
  startDelay = 0.3,
  showCursor = true,
  className,
  as: Tag = "p",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.3 });

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
    }
  }, [isInView, started]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const delay = 1000 / speed;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayedText(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
        }
      }, delay);
      return () => clearInterval(interval);
    }, startDelay * 1000);

    return () => clearTimeout(timeout);
  }, [started, text, speed, startDelay]);

  return React.createElement(
    Tag,
    { ref, className },
    displayedText,
    showCursor && started && displayedText.length < text.length ? (
      <span className="inline-block w-[2px] h-[1em] bg-green-600 ml-0.5 align-middle animate-pulse" />
    ) : null
  );
};

export default Typewriter;
