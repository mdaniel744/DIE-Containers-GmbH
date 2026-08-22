"use client";

import Image from "next/image";

const LOCAL_IMAGE = /^\//;
const SUPABASE_IMAGE = /^https:\/\/[^/]+\.supabase\.co\/storage\/v1\/object\/public\//i;

/**
 * A small, layout-neutral wrapper around next/image.
 *
 * Most of the existing site places media inside an aspect-ratio or fixed-height
 * box and controls cropping with Tailwind classes. Keeping intrinsic dimensions
 * here preserves that layout while Next.js generates a responsive srcset.
 * Unknown third-party URLs remain usable but bypass the optimizer; local and
 * Supabase Storage images use the full Next.js image pipeline.
 */
export default function MediaImage({
  src,
  alt,
  sizes = "100vw",
  width = 1600,
  height = 1200,
  quality = 80,
  priority = false,
  loading = undefined,
  ...props
}) {
  if (!src) return null;

  const optimizable = LOCAL_IMAGE.test(src) || SUPABASE_IMAGE.test(src);

  return (
    <Image
      src={src}
      alt={alt || ""}
      width={width}
      height={height}
      sizes={sizes}
      quality={quality}
      priority={priority}
      loading={priority ? undefined : loading}
      unoptimized={!optimizable}
      {...props}
    />
  );
}
