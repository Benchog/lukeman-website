"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
        <Link
          href="/"
          className="font-heading text-base sm:text-xl font-bold text-[#0A192F] truncate max-w-[70%] sm:max-w-none"
          onClick={closeMenu}
        >
          <span className="sm:hidden">Lukeman</span>
          <span className="hidden sm:inline">Lukeman Consulting Agency</span>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-slate-700"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
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
      {isOpen ? (
        <nav className="md:hidden border-t border-slate-200 bg-white px-4 pb-4 pt-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`block rounded-xl px-3 py-2 text-sm font-medium ${
                pathname === link.href ? "bg-amber-50 text-amber-700" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/lukemantahiru/30min?month=2026-04"
            target="_blank"
            onClick={closeMenu}
            className="mt-2 block rounded-xl bg-amber-500 px-4 py-2.5 text-center text-sm font-semibold text-[#0A192F]"
          >
            Book a Session
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
