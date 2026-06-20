import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  showCursor?: boolean;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 60,
  startDelay = 0.3,
  showCursor = true,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef<HTMLParagraphElement>(null);
  const hasStarted = useRef(false);
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.3 });

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

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
  }, [isInView, text, speed, startDelay]);

  return (
    <p ref={ref} className={className}>
      {displayedText}
      {showCursor && displayedText && displayedText.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-green-600 ml-0.5 align-middle animate-pulse" />
      )}
    </p>
  );
};

export default Typewriter;
