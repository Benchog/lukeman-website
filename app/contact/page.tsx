import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Lukeman Tahiru for consulting, mentorship, or speaking requests.",
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0A192F]">Let&apos;s Start a Conversation</h1>
        <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
          Let&apos;s work together to build something meaningful and impactful.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: Mail, title: "Email", value: "lukemantahiru@gmail.com", href: "mailto:lukemantahiru@gmail.com" },
            { icon: Phone, title: "Phone", value: "0599117796 / 0500834031", href: "tel:+233599117796" },
            { icon: MessageCircle, title: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/233599117796" },
          ].map(({ icon: Icon, title, value, href }) => (
            <Link
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="bg-amber-100 p-3 rounded-xl w-fit">
                <Icon className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="mt-4 text-xl md:text-2xl font-semibold text-[#0A192F]">{title}</h2>
              <p className="mt-2 text-gray-600">{value}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
