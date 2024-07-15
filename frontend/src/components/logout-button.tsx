import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

async function logoutAction() {
  "use server";
  cookies().set("jwt", "", { ...config, maxAge: 0 });
  redirect("/");
}

export function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button type="submit" className="bg-transparent flex items-center text-muted-foreground">
        Logout <LogOut className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}
