"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Space } from "@/content/spaces";

type Media =
  | { kind: "image"; item: Space["images"][number]; group?: string }
  | { kind: "video"; item: NonNullable<Space["videos"]>[number]; group?: string };

export function SpaceGallery({ images, videos = [], showGroups = false, hideCaptions = false }: { images: Space["images"]; videos?: Space["videos"]; showGroups?: boolean; hideCaptions?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(8);
  const sentinel = useRef<HTMLDivElement>(null);
  const media: Media[] = images.flatMap((item) => [
    { kind: "image" as const, item, group: item.group },
    ...videos.filter((video) => video.afterImage === item.src).map((video) => ({ kind: "video" as const, item: video, group: item.group })),
  ]);
  media.push(...videos.filter((video) => !images.some((image) => image.src === video.afterImage)).map((item) => ({ kind: "video" as const, item })));
  const hasMore = visibleCount < media.length;

  useEffect(() => {
    if (!hasMore) return;
    if (!("IntersectionObserver" in window)) {
      setVisibleCount(media.length);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        setVisibleCount((count) => count + 8);
      }
    }, { rootMargin: "600px 0px" });
    if (sentinel.current) observer.observe(sentinel.current);
    return () => observer.disconnect();
  }, [hasMore, visibleCount, media.length]);

  return (
    <div>
      <ul className="grid grid-cols-1 items-start gap-x-5 gap-y-8 sm:grid-cols-2">
        {media.slice(0, visibleCount).map(({ kind, item, group }, index) => {
          const previousGroup = index > 0 ? media[index - 1].group : undefined;
          const startsGroup = Boolean(showGroups && group && group !== previousGroup);
          const fullWidth = kind === "image" && "width" in item && item.width >= item.height && item.layout !== "half";
          return (
          <li key={item.src} className={startsGroup ? "contents" : fullWidth ? "sm:col-span-2" : undefined}>
            {startsGroup && <h2 className="col-span-full border-t pt-8 text-sm font-semibold tracking-tight first:border-t-0 first:pt-0">{group}</h2>}
            <figure className={fullWidth ? "sm:col-span-2" : undefined}>
              {kind === "image" && "original" in item ? (
                <a href={item.original} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${item.alt}`} className="group block overflow-hidden bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes={fullWidth ? "(max-width: 960px) calc(100vw - 48px), 912px" : "(max-width: 639px) calc(100vw - 48px), (max-width: 960px) calc((100vw - 68px) / 2), 446px"}
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                    className="h-auto w-full transition-opacity group-hover:opacity-90"
                  />
                </a>
              ) : "poster" in item ? (
                <video controls playsInline preload="none" poster={item.poster} aria-label={item.caption} className="h-auto w-full bg-muted">
                  <source src={item.src} type="video/mp4" />
                  <a href={item.src}>Watch {item.caption.toLowerCase()}</a>
                </video>
              ) : null}
              <figcaption className={hideCaptions ? "sr-only" : "mt-2 text-xs leading-relaxed text-muted-foreground"}>{item.caption}</figcaption>
            </figure>
          </li>
          );
        })}
      </ul>
      {hasMore && <div ref={sentinel} className="h-px" aria-hidden="true" />}
    </div>
  );
}
