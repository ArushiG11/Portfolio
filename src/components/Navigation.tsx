"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    ["Home", "/"],
    ["Projects", "/projects"],
    ["Experience", "/experience"],
    ["Resume", "/resume"],
    ["Chat", "/chat"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-6 text-sm font-medium bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
      {navItems.map(([label, href]) => (
        <button
          key={label}
          onClick={() => router.push(href)}
          className={`cursor-pointer transition ${
            pathname === href
              ? "text-indigo-400 underline"
              : "text-white hover:text-indigo-300"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

