"use client";

// Generic error page https://nextjs.org/docs/app/building-your-application/routing/error-handling

import { useEffect } from "react";

export default function RootError({
  error,
  reset,
}: {
  readonly error: Error & { readonly digest?: string };
  readonly reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto p-6">
      <h2>Something went wrong!</h2>
      <pre>{error.message}</pre>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
