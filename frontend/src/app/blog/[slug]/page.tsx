import React from "react";
import qs from "qs";
import { Metadata } from "next";
import { formatDate, getStrapiURL } from "@/lib/utils";
import { MarkdownText } from "@/components/markdown-text";
import { StrapiImage } from "@/components/strapi-image";

interface Props {
  params: {
    slug: string;
  };
}



async function loader(slug: string) {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/posts";
  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);
  url.search = qs.stringify({
    populate: {
      image: {
        fields: ["url", "alternativeText", "name"],
      },
      category: {
        fields: ["text"],
      },
    },
    filters: {
      slug: { $eq: slug },
    },
  });
  const data = await fetchData(url.href);
  return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await loader(params.slug);
  const { title, description } = data?.data[0];
  console.log(title, description);
  return {
    title: title,
    description: description,
  };
}
export default async function SinglePost({ params }: Props) {
  const data = await loader(params.slug);
  const post = data?.data[0];
  if (!post) return null;

  return (
    <article>
      <div>
        <header className="container mx-auto my-10">
          <h1 className="text-6xl font-bold tracking-tighter sm:text-5xl mb-4">{post.title}</h1>
          <p className="text-muted-foreground">
            Posted on {formatDate(post.publishedAt)} - {post.category.text}
          </p>
          <StrapiImage
            src={post.image.url}
            alt={post.image.alternativeText}
            width={800}
            height={600}
            priority
            className="w-full rounded-lg mt-8"
          />
        </header>
      </div>

      <div className="container mx-auto max-w-4xl text-base leading-7">
        <MarkdownText content={post.content} />
      </div>
    </article>
  );
}
