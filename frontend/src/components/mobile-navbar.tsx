"use client";

import { Menu, X } from "lucide-react";
import { ReactNode, useState } from "react";

import { useLockBody } from "@/lib/hooks/utils/use-lock-body";

function MobileMenu({ onClose, children }: { onClose: () => void; children: ReactNode }) {
  useLockBody();

  return (
    <div
      className="fixed inset-0 top-[50px] z-50 size-full overflow-auto bg-black/40 animate-in slide-in-from-bottom-24 md:hidden"
      onClick={onClose}
    >
      {children}
    </div>
  );
}

export function MobileNavbar({ children }: { children: ReactNode }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <X /> : <Menu />}
      </button>
      {showMobileMenu && (
        <MobileMenu onClose={() => setShowMobileMenu(false)}>{children}</MobileMenu>
      )}
    </>
  );
}
