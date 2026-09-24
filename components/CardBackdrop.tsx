"use client";

import React from "react";
import Image from "next/image";

/**
 * Tuning knobs for how strongly the card image reads.
 *
 * Raise IMAGE_OPACITY for more image presence. Raise the scrim values if the
 * white card text starts losing contrast against a bright source image.
 *
 * Card text pairs with the `.text-on-image` utility (see globals.css) so it
 * stays legible over the photo without needing a heavier scrim.
 */
const IMAGE_OPACITY = "opacity-[0.75] group-hover:opacity-[0.9]";
const SCRIM =
  "bg-[linear-gradient(180deg,rgba(11,34,38,0.32)_0%,rgba(11,34,38,0.72)_100%)]";

/**
 * Decorative image sitting behind a dark card, with a gradient scrim so the
 * text above it stays legible regardless of how bright the source image is.
 *
 * Renders nothing when the source is missing or fails to load, so a card
 * degrades to a plain dark surface instead of showing a broken image or
 * collapsing its layout.
 *
 * `alt=""` plus `aria-hidden` is deliberate: the image carries no information,
 * the card heading does.
 */
export const CardBackdrop = ({
  src,
  sizes,
}: {
  src: string | null;
  sizes: string;
}) => {
  const [failed, setFailed] = React.useState(false);

  if (!src || failed) return null;

  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        sizes={sizes}
        className={`object-cover transition-opacity duration-500 ${IMAGE_OPACITY}`}
        onError={() => setFailed(true)}
      />
      <div className={`absolute inset-0 ${SCRIM}`} />
    </>
  );
};
