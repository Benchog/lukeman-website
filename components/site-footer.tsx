import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#0A192F] py-14">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl font-bold text-white">
            Lukeman Consulting Agency
          </p>
          <p className="mt-3 text-sm text-slate-300">Building people. Building businesses.</p>
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <p className="font-heading text-lg font-semibold text-white">Quick Links</p>
          <Link href="/services" className="block hover:text-amber-400">
            Services
          </Link>
          <Link href="/speaking" className="block hover:text-amber-400">
            Speaking
          </Link>
          <Link href="/contact" className="block hover:text-amber-400">
            Contact
          </Link>
        </div>
        <div className="space-y-3 text-sm text-slate-300">
          <p className="font-heading text-lg font-semibold text-white">Contact</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber-500" /> lukemantahiru@gmail.com</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-500" /> 0599117796 / 0500834031</p>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-amber-500" /> Kumasi, Ghana</p>
        </div>
      </div>
    </footer>
  );
}
