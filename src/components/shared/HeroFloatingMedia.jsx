"use client";

import MediaImage from "@/components/shared/MediaImage";

/**
 * A transparent, full-canvas hero visual. The supplied artwork already keeps
 * its subject on the right, so the complete image can scale without crowding
 * the hero copy on the left.
 */
export default function HeroFloatingMedia({ src, alt, className = "" }) {
  if (!src) return null;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[1] hidden items-center opacity-95 md:flex ${className}`}
    >
      <MediaImage
        src={src}
        alt={alt}
        width={1240}
        height={363}
        sizes="(max-width: 1023px) 100vw, 1240px"
        quality={90}
        priority
        className="h-full w-full object-contain object-right"
      />
    </div>
  );
}
