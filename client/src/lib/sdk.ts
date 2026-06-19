import { getStrapiURL } from "@/lib/utils";
import { strapi } from '@strapi/client';
import { draftMode } from "next/headers";

const BASE_API_URL = getStrapiURL() + "/api";

const sdk = strapi({ baseURL: BASE_API_URL });
export default sdk;

/**
 * Returns a Strapi client that asks the API to embed content source maps
 * (invisible stega markers) into string fields when Next.js draft mode is on.
 * Those markers are what the live-preview highlight script reads to make the
 * rendered page click-to-editable. Outside of draft mode it behaves like the
 * default client.
 */
export async function getSdk() {
  let isDraft = false;
  try {
    isDraft = (await draftMode()).isEnabled;
  } catch {
    // draftMode() throws outside of a request scope (e.g. generateStaticParams).
    // Fall back to the non-draft client.
  }

  return strapi({
    baseURL: BASE_API_URL,
    headers: {
      "strapi-encode-source-maps": isDraft ? "true" : "false",
    },
  });
}
