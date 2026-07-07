"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Motivation", href: "/motivation" },
    { name: "States", href: "/states" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="flex gap-2 overflow-x-auto p-3">

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
              pathname === link.href
                ? "bg-orange-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {link.name}
          </Link>
        ))}

        <a
          href="#register"
          className="px-4 py-2 rounded-full bg-orange-600 text-white border whitespace-nowrap"
        >
          Join
        </a>

      </div>
    </div>
  );
}