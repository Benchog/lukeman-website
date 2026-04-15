import type { Metadata } from "next";
import { DollarSign, Mic, Target, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Consulting, mentorship, and speaking services designed for measurable growth.",
};

const services = [
  { icon: TrendingUp, title: "Growth Advisory", text: "Scale your business with better systems and sales structure." },
  { icon: Target, title: "Strategy Design", text: "Build a clear and actionable growth roadmap." },
  { icon: Users, title: "Mentorship", text: "Sustained support and accountability for your next level." },
  { icon: DollarSign, title: "Financial Direction", text: "Improve profitability and long-term financial health." },
  { icon: Mic, title: "Speaking Engagements", text: "High-impact talks with practical implementation frameworks." },
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0A192F]">Services Built for Real-World Outcomes</h1>
        <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
          Each service is designed to move your strategy from idea to measurable implementation.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="bg-amber-100 p-3 rounded-xl w-fit">
                <Icon className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#0A192F]">{title}</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
