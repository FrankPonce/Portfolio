"use client";

import { useEffect, useRef, useState } from "react";
import { SigilStar } from "./Sigil";

/** True once the element has come within `margin` of the viewport (then stays true). */
export function useNearViewport<T extends Element>(margin = "400px") {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    if (!("IntersectionObserver" in window)) return setNear(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin, near]);
  return [ref, near] as const;
}

/** The shape of an embed while it loads: animated blood-red border, sweep and a breathing star. */
export function LoadingShape({ done, label = "Loading" }: { done: boolean; label?: string }) {
  return (
    <div aria-busy={!done} aria-live="polite" className="pf-skeleton" data-done={done}>
      <SigilStar className="pf-skeleton-star" />
      <span className="pf-skeleton-label">{done ? "" : `${label}…`}</span>
    </div>
  );
}

/** An iframe that only starts loading near the viewport and shows the loading shape until it's ready. */
export function LazyFrame({
  src,
  title,
  label,
  className = "absolute inset-0 size-full border-0",
  style,
}: {
  src: string;
  title: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [ref, near] = useNearViewport<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);
  return (
    <div ref={ref} className="absolute inset-0">
      {near && (
        <iframe
          allow="fullscreen"
          allowFullScreen
          className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          referrerPolicy="strict-origin-when-cross-origin"
          src={src}
          style={style}
          title={title}
        />
      )}
      <LoadingShape done={loaded} label={label} />
    </div>
  );
}
