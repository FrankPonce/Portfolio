"use client";

import { useEffect, useRef, useState } from "react";
import { LazyFrame } from "./Loading";

/**
 * Renders a page at a fixed desktop width and scales it down to fit its container, so an embedded
 * web app shows its desktop layout instead of switching to its phone layout in a narrow frame.
 * The page only starts loading once it's near the viewport.
 */
export function ScaledFrame({ src, title, designWidth = 1440 }: { src: string; title: string; designWidth?: number }) {
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ scale: 1, height: 0 });

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      const scale = Math.min(1, width / designWidth);
      setSize({ scale, height: height / scale });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div ref={box} className="absolute inset-0 overflow-hidden">
      <LazyFrame
        className="absolute top-0 left-0 origin-top-left border-0"
        label="Loading live app"
        src={src}
        style={{ width: designWidth, height: size.height || "100%", transform: `scale(${size.scale})` }}
        title={title}
      />
    </div>
  );
}
