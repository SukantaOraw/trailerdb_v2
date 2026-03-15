"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export default function FloatingTrigger() {
  const { state } = useSidebar();

  const isOpen = state === "expanded";

  return (
    <div
      className={`fixed top-13 z-50 transition-all duration-300
        ${isOpen ? "left-[260px]" : "left-[50px]"}`}
    >
      <SidebarTrigger className="rounded-md border bg-zinc-800 p-2 hover:bg-zinc-700 shadow-lg" />
    </div>
  );
}
