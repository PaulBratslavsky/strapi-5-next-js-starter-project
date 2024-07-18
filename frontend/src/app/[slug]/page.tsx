import type { Block } from "@/types";

import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

import { Hero } from "@/components/hero";
import { CardGrid } from "@/components/card-grid";
import { SectionHeading } from "@/components/section-heading";
import ContentWithImage from "@/components/content-with-image";

interface StaticParamsProps {
  id: number;
  slug: string;
}

export async function generateStaticParams() {
  const { fetchData } = await import("@/lib/fetch");

  const path = "/api/pages";
  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);

  url.search = qs.stringify({
    fields: ["slug"],
  });

  const pages = await fetchData(url.href);

  return pages.data.map((page: Readonly<StaticParamsProps>) => ({
    slug: page.slug,
  }));
}

async function loader(slug: string) {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/pages";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero": {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
              buttonLink: {
                populate: "*",
              },
              topLink: {
                populate: "*",
              },
            },
          },
          "layout.card-grid": {
            populate: "*",
          },
          "layout.section-heading": {
            populate: "*",
          },
          "layout.content-with-image": {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
            },
          },
        },
      },
    },
    filters: {
      slug: slug,
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;
  const data = await fetchData(url.href);
  return data;
}

function BlockRenderer(block: Block) {
  console.log(block.__component, "From BlockRenderer");
  switch (block.__component) {
    case "layout.hero":
      return <Hero key={block.id} {...block} />;
    case "layout.card-grid":
      return <CardGrid key={block.id} {...block} />;
    case "layout.section-heading":
      return <SectionHeading key={block.id} {...block} />;
    case "layout.content-with-image":
      return <ContentWithImage key={block.id} {...block} />;
    default:
      return null;
  }
}

export default async function PageBySlugRoute({ params }: { params: { slug: string } }) {
  const slug = params?.slug;
  const data = await loader(slug);
  const blocks = data?.data[0]?.blocks;
  if (!blocks) return null;
  return <div>{blocks ? blocks.map((block: any) => BlockRenderer(block)) : null}</div>;
}
