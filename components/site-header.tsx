"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-bold text-[#0A192F]">
          Lukeman Consulting Agency
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-amber-600" : "text-slate-700 hover:text-amber-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/lukemantahiru/30min?month=2026-04"
            target="_blank"
            className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-[#0A192F] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            Book a Session
          </Link>
        </nav>
      </div>
    </header>
  );
}
