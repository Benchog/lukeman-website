import type { Metadata } from "next";
import Link from "next/link";
import { Mic, Target, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Invite Lukeman Tahiru for practical and transformational speaking sessions.",
};

export default function SpeakingPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#0A192F]">Speaking That Moves People to Action</h1>
        <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
          I am available for speaking engagements, workshops, and seminars.
        </p>
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2">
          {[
            { icon: TrendingUp, title: "Business and entrepreneurship" },
            { icon: Target, title: "Sales and marketing" },
            { icon: Users, title: "Personal development and mindset" },
            { icon: Mic, title: "Financial growth, discipline, and purpose clarity" },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-lg">
              <div className="bg-amber-100 p-3 rounded-xl w-fit">
                <Icon className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="mt-4 text-xl md:text-2xl font-semibold text-[#0A192F]">{title}</h2>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 rounded-2xl bg-slate-50 p-5 sm:p-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F]">Audience Types</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Schools and universities, corporate organizations, youth groups, and business communities.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="https://calendly.com/lukemantahiru/30min?month=2026-04"
              target="_blank"
              className="w-full sm:w-auto min-h-11 text-center rounded-2xl bg-amber-500 px-5 py-2.5 text-sm sm:text-base font-semibold text-[#0A192F] transition-all duration-300 hover:scale-[1.02]"
            >
              Book to Invite Lukeman
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto min-h-11 text-center rounded-2xl border border-slate-300 px-5 py-2.5 text-sm sm:text-base font-semibold text-[#0A192F] transition-all duration-300 hover:scale-[1.02]"
            >
              Send Speaking Request
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
