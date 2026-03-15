"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import NavBar from "../my_components/NavBar";
import AppSidebar from "../my_components/SideBar";
import FloatingTrigger from "../my_components/FloatingTrigger";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        <AppSidebar />

        <FloatingTrigger />

        {/* main content */}
        <main className="md:ml-[45px] ml-[0px] p-0 md:p-2 bg-zinc-600 flex-1">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
