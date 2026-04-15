import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/233599117796"
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex min-h-11 items-center gap-2 rounded-full bg-amber-500 px-3 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-[#0A192F] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </Link>
  );
}
