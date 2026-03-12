"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Simple Navbar */}
      <div className="flex items-center gap-4 border-b border-zinc-800 p-4">
        <Button variant="secondary" >
          <Link href="/home">Home</Link>
        </Button>

        <Button variant="primary" >
          <Link href="/home/movies">Movies</Link>
        </Button>

        <Button variant="danger" >
          <Link href="/home/series">Series</Link>
        </Button>
      </div>

      {/* Page Content */}
      <main className="p-6">{children}</main>
    </div>
  );
}
