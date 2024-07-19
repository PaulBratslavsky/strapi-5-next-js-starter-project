import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  priority = false,
  fill = false,
}: Readonly<StrapiImageProps>) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height}
      width={width}
      className={className}
      priority={priority}
      fill={fill}
    />
  );
}