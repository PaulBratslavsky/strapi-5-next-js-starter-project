import { getStrapiURL } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryButton from "./category-button";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/categories";
  const baseUrl = getStrapiURL();
  const url = new URL(path, baseUrl);
  const data = await fetchData(url.href);
  return data;
}

export async function CategorySelect() {
  const data = await loader();
  const categories = data?.data;
  if (!categories) return null;
  console.log(categories);

  return (
    <div className="w-full flex gap-2 justify-center items-center">
      {categories.map(({ text, documentId }: { text: string; documentId: string }) => (
        <CategoryButton key={documentId} value={text}>
          {text}
        </CategoryButton>
      ))}
      <CategoryButton value="">all</CategoryButton>
    </div>
  );
}
