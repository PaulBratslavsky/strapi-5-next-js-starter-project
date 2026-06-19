"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Wires up Strapi v5 live-preview "click-to-edit". When the page is rendered
 * inside the Strapi admin preview iframe, Strapi posts a highlight script to the
 * iframe; this component injects it and refreshes the route on content updates.
 *
 * `strapiUrl` is the origin of the Strapi admin (passed from a server component
 * because the Strapi URL is a server-only env var). It guards which postMessages
 * we trust.
 */
export const Preview = ({ strapiUrl }: { strapiUrl: string }) => {
  const router = useRouter();

  useEffect(() => {
    const allowedOrigin = strapiUrl.replace(/\/$/, "");

    const handleMessage = async (message: MessageEvent) => {
      const { origin, data } = message;

      if (origin !== allowedOrigin) {
        return;
      }

      if (data?.type === "strapiUpdate") {
        router.refresh();
      } else if (data?.type === "strapiScript") {
        // Workaround for a Strapi bug: the production admin build injects a
        // live-preview highlight script that calls a bundler helper `ye` (a
        // lazy-import wrapper around `import('@vercel/stega')`) but never
        // includes `ye` in the emitted script string. So the script throws
        // `ReferenceError: ye is not defined`, its init promise rejects with no
        // catch, and click-to-edit never wires up (no overlay, no field
        // selection). It works under `strapi develop` because the dev build
        // inlines the helper. Shim `ye` as a passthrough that just runs the
        // factory so the dynamic import resolves. Remove once Strapi ships a
        // build that self-contains the helper.
        const w = window as unknown as {
          ye?: (factory: () => unknown) => unknown;
        };
        if (typeof w.ye === "undefined") {
          w.ye = (factory) => factory();
        }

        const script = window.document.createElement("script");
        script.textContent = data.payload.script;
        window.document.head.appendChild(script);
      }
    };

    window.addEventListener("message", handleMessage);

    // Tell Strapi the preview iframe is ready to receive the script.
    window.parent?.postMessage({ type: "previewReady" }, "*");

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [router, strapiUrl]);

  return null;
};
