import qs from "qs";
import Link from "next/link";
import { StrapiImage } from "@/components/strapi-image";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "@/components/search";
import { PaginationComponent } from "@/components/pagination";
import { getStrapiURL } from "@/lib/utils";
import { CategorySelect } from "@/components/category-select";
import { formatDate } from "@/lib/utils";

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
    category?: string;
  };
}

interface PostProps {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  image: {
    url: string;
    alternativeText: string;
    name: string;
  };
  category: {
    text: string;
  };
}

async function loader(page: number, queryString: string, category: string) {
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
      category: category.length !== 0 ? { text: { $eq: category } } : {},
      $or: [
        { title: { $containsi: queryString } },
        { description: { $containsi: queryString } },
        { content: { $containsi: queryString } },
      ],
    },

    pagination: {
      pageSize: 9,
      page: page,
    },
  });
  const data = await fetchData(url.href);
  return data;
}

export default async function BlogRoute({ searchParams }: SearchParamsProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query ?? "";
  const category = searchParams?.category ?? "";
  const data = await loader(currentPage, query, category);
  const total = data?.meta.pagination.pageCount;
  const posts = data?.data;
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Articles</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">Our Blog</h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl text-center">
        Checkout some of our cool articles. We write about the latest trends in tech, design and much more.
      </p>
      <CategorySelect />
      <Search />
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {posts &&
          posts.map((item: PostProps) => (
            <Link href={"/blog/" + item.slug} key={item.documentId}>
              <Card className="h-full shadow-lg border-none">
                <CardContent className="flex h-full flex-col items-start gap-5 px-0">
                  <div className="relative h-52 w-full">
                    <StrapiImage
                      alt={item.image.alternativeText}
                      src={item.image.url}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 px-5">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="mb-auto text-muted-foreground">{item.description}</p>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full outline outline-1 outline-primary text-primary px-3 py-0.5 text-sm text-accent-foreground">
                        {item.category.text}
                      </span>
                      <span className="text-sm text-muted-foreground">{formatDate(item.publishedAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
      <PaginationComponent pageCount={total} />
    </section>
  );
}
