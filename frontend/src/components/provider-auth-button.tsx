import React from "react";
import { cn } from "@/lib/utils";

import { getStrapiURL } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";





import Link from "next/link";
export function ProviderAuthLink({
  providerName,
  buttonText,
  children,
}: {
  readonly providerName: string;
  readonly buttonText: string;
  readonly children: React.ReactNode;
}) {
  const backendUrl = getStrapiURL();
  const path = "/api/connect/" + providerName;
  const url = new URL(backendUrl + path);

  return (
    <Link href={url.href} className={cn(buttonVariants({ variant: "outline" }), "flex items-center w-full justify-center")} >
      {children}
      <span className="ml-4 text-sm font-semibold leading-6">{buttonText}</span>
    </Link>
  );
}
