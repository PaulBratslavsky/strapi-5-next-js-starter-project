import type { CardGridProps } from "@/types";
import { Frame, Download, Globe, Sparkles, LayoutPanelLeft, Palette } from "lucide-react";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function selectIcon(icon: string) {
  switch (icon) {
    case "Frame":
      return <Frame size={28} className="text-primary" />;
    case "Download":
      return <Download size={28} className="text-primary" />;
    case "Globe":
      return <Globe size={28} className="text-primary" />;
    case "Sparkles":
      return <Sparkles size={28} className="text-primary" />;
    case "LayoutPanelLeft":
      return <LayoutPanelLeft size={28} className="text-primary" />;
    case "Palette":
      return <Palette size={28} className="text-primary" />;
    default:
      return null;
  }
}

export function CardCarousel(data: Readonly<CardGridProps>) {
  if (!data) return null;

  const { cardItems } = data;

  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          {cardItems.map(({ id, heading, text, icon }) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={id}>
              <div className="h-full p-1">
                <Card className="shadow-lg">
                  <CardContent className="flex flex-col items-start gap-5 p-7">
                    <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                      {selectIcon(icon)}
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-foreground">{heading}</h4>
                      <p className="text-muted-foreground">{text}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
