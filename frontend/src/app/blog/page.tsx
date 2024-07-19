import Link from "next/link";
import { StrapiImage } from "@/components/strapi-image";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "@/components/search";
import { Pagination } from "@/components/ui/pagination";
import { PaginationComponent } from "@/components/pagination";

const data = [
  {
    id: 1,
    date: "May 20, 2022",
    image: {
      url: "https://placehold.co/800x600",
      alternativeText: "Image",
    },
    title: "How to build a beautiful landing page in minutes",
    description: "Learn how to build beautiful landing pages fast.",
    slug: "how-to-build-a-beautiful-landing-page-in-minutes",
  },
  {
    id: 1,
    date: "May 20, 2022",
    image: {
      url: "https://placehold.co/800x600",
      alternativeText: "Image",
    },
    title: "How to build a beautiful landing page in minutes",
    description: "Learn how to build beautiful landing pages fast.",
    slug: "how-to-build-a-beautiful-landing-page-in-minutes",
  },
  {
    id: 1,
    date: "May 20, 2022",
    image: {
      url: "https://placehold.co/800x600",
      alternativeText: "Image",
    },
    title: "How to build a beautiful landing page in minutes",
    description: "Learn how to build beautiful landing pages fast.",
    slug: "how-to-build-a-beautiful-landing-page-in-minutes",
  },
  {
    id: 1,
    date: "May 20, 2022",
    image: {
      url: "https://placehold.co/800x600",
      alternativeText: "Image",
    },
    title: "How to build a beautiful landing page in minutes",
    description: "Learn how to build beautiful landing pages fast.",
    slug: "how-to-build-a-beautiful-landing-page-in-minutes",
  },
  {
    id: 1,
    date: "May 20, 2022",
    image: {
      url: "https://placehold.co/800x600",
      alternativeText: "Image",
    },
    title: "How to build a beautiful landing page in minutes",
    description: "Learn how to build beautiful landing pages fast.",
    slug: "how-to-build-a-beautiful-landing-page-in-minutes",
  },
  {
    id: 1,
    date: "May 20, 2022",
    image: {
      url: "https://placehold.co/800x600",
      alternativeText: "Image",
    },
    title: "How to build a beautiful landing page in minutes",
    description: "Learn how to build beautiful landing pages fast.",
    slug: "how-to-build-a-beautiful-landing-page-in-minutes",
  },
];

export default function BlogRoute() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Articles</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">Our Blog</h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-2xl text-center">
        Learn how to build beautiful landing pages fast.
      </p>
      <Search />
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Link href="#" key={item.id}>
            <Card className="h-full shadow-lg border-none">
              <CardContent className="flex h-full flex-col items-start gap-5 px-0">
                <div className="relative h-52 w-full">
                  <StrapiImage
                    alt="How to build a beautiful landing page in minutes"
                    src="https://images.pexels.com/photos/15378172/pexels-photo-15378172/free-photo-of-landmark-81-skyscraper-towering-over-buildings-in-saigon-vietnam.jpeg"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 px-5">
                  <h4 className="text-lg font-semibold">
                    How to build a beautiful landing page in minutes
                  </h4>
                  <p className="mb-auto text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices
                    orci. Vivamus ante arcu, hendrerit.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border bg-accent px-3 py-0.5 text-sm text-accent-foreground">
                      Coding
                    </span>
                    <span className="text-sm text-muted-foreground">Jul 16, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <PaginationComponent pageCount={10} />
    </section>
  );
}
