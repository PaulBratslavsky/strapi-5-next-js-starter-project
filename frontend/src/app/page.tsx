import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

import { Hero } from "@/components/hero";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/landing-page";
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
              buttonLink:{
                populate: "*",
              },
              topLink: {
                populate: "*",
              }
            },
          },
        },
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;
  const data = await fetchData(url.href);
  return data;
}

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero":
      return <Hero key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const data = await loader();
  const blocks = data?.data?.blocks;
  if (!blocks) return null;

  return <div>{blocks ? blocks.map((block: any) => blockRenderer(block)) : null}</div>;
}
