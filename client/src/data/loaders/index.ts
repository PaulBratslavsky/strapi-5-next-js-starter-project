import sdk, { getSdk } from "@/lib/sdk";
const PAGE_SIZE = 3;

export async function getGlobalPageData() {
  const landingPage = await sdk.single("global").find({
    populate: {
      topNav: {
        populate: "*",
      },
      footer: {
        populate: "*",
      },
    },
  });
  return landingPage;
}

export async function getLandingPage() {
  const sdk = await getSdk();
  const landingPage = await sdk.single("landing-page").find({
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
          "layout.price-grid": {
            populate: {
              priceCard: {
                populate: "*",
              },
            },
          },
        },
      },
    },
  });
  return landingPage;
}

export async function getAllPagesSlugs() {
  const pages = await sdk.collection("pages").find({
    fields: ["slug"],
  });
  return pages;
}

export async function getPageBySlug(slug: string, status: string) {
  const sdk = await getSdk();
  const page = await sdk.collection("pages").find({
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
    status: status as "draft" | "published" | undefined,
  });
  return page;
}

export async function getCategories() {
  const categories = await sdk.collection("categories").find({
    fields: ["text", "description"],
  });
  return categories;
}

export async function getBlogPostBySlug(slug: string, status: string) {
  const sdk = await getSdk();
  const post = await sdk.collection("posts").find({
    populate: {
      image: {
        fields: ["url", "alternativeText", "name"],
      },
      category: {
        fields: ["text"],
      },
      blocks: {
        on: {
          "blocks.video": {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
            },
          },
          "blocks.text": {
            populate: "*",
          },
        },
      },
    },
    filters: {
      slug: { $eq: slug },
    },
    status: status as "draft" | "published" | undefined,
  });
  return post;
}

export async function getBlogPosts(
  page: number,
  queryString: string,
  category: string
) {
  const posts = await sdk.collection("posts").find({
    populate: {
      image: {
        fields: ["url", "alternativeText", "name"],
      },
      category: {
        fields: ["text"],
      },
    },

    filters: {
      $or: [
        { title: { $containsi: queryString } },
        { description: { $containsi: queryString } },
        { category: { text: { $containsi: queryString || category } } },
      ],
    },

    pagination: {
      pageSize: PAGE_SIZE,
      page: page,
    },
  });
  return posts;
}
