import type { Metadata } from "next";
import { Mic, Target, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Invite Lukeman Tahiru for practical and transformational speaking sessions.",
};

export default function SpeakingPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0A192F]">Speaking That Moves People to Action</h1>
        <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
          I am available for speaking engagements, workshops, and seminars.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { icon: TrendingUp, title: "Business and entrepreneurship" },
            { icon: Target, title: "Sales and marketing" },
            { icon: Users, title: "Personal development and mindset" },
            { icon: Mic, title: "Financial growth, discipline, and purpose clarity" },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-lg">
              <div className="bg-amber-100 p-3 rounded-xl w-fit">
                <Icon className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="mt-4 text-xl md:text-2xl font-semibold text-[#0A192F]">{title}</h2>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-slate-50 p-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">Audience Types</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Schools and universities, corporate organizations, youth groups, and business communities.
          </p>
        </div>
      </div>
    </section>
  );
}
