import type { CardGridProps } from "@/types";
import { Frame, Download, Globe, Sparkles, LayoutPanelLeft, Palette } from "lucide-react";

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

export function CardGrid(data: Readonly<CardGridProps>) {
  if (!data) return null;

  const { cardItems } = data;

  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {cardItems.map(({ id, heading, text, icon }) => (
          <Card className="shadow-lg" key={id}>
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
        ))}
      </div>
    </section>
  );
}
