"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import NavBar from "../components/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main-screen min-w-screen min-h-screen">
      <NavBar />
      <div className="body flex flex-row">
        <div className="basis-1/7 flex justify-center items-center bg-stone-800">
          <p>Side-Bar will ne shrinkable</p>
        </div>
        <div className="basis-6/7 bg-stone-700">
          <main className="p-4">{children}</main>
        </div>
      </div>
    </main>
  );
}
