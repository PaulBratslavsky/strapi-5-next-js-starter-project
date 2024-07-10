import type { HeroProps } from "@/types";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StrapiImage } from "./strapi-image";

export function Hero(data : Readonly<HeroProps>) {
  if (!data) return null;
  const { heading, text, topLink, buttonLink, image } = data;
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 md:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 md:items-start md:gap-10">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
          {topLink && (
            <Link
              href={topLink.href}
              target={topLink.isExternal ? "_blank" : "_self"}
              className="flex items-center justify-center gap-1 text-sm text-secondary-foreground"
            >
              {topLink.text}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl sm:leading-tight md:text-left">
          {heading}
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground md:text-left">{text}</p>
        <div className="grid grid-cols-2 gap-3">
          {buttonLink &&
            buttonLink.map((link) => (
              <Button
                key={link.text}
                size="lg"
                variant={link.isPrimary ? "default" : "outline"}
                asChild
                className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
              >
                <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                  {link.text}
                </Link>
              </Button>
            ))}
        </div>
      </div>
      <div className="relative flex-1">
        <StrapiImage
          src={image.url}
          alt="SaaS Dashboard"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
