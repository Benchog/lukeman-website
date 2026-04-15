import type { Metadata } from "next";
import { DollarSign, Mic, Target, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Consulting, mentorship, and speaking services designed for measurable growth.",
};

const services = [
  {
    icon: Target,
    title: "One-on-One Consulting & Masterclass",
    text: "Personalized sessions designed to help you solve specific business or personal growth challenges. Rate: GHS 200 per session (1 hour).",
  },
  {
    icon: TrendingUp,
    title: "Business & Growth Consulting",
    text: "For small businesses, startups, and growing companies to improve sales performance, build scalable systems, develop marketing strategies, and strengthen customer relationships.",
  },
  {
    icon: Users,
    title: "Mentorship",
    text: "For young professionals, aspiring entrepreneurs, students seeking direction, and individuals looking to improve mindset and discipline.",
  },
  {
    icon: DollarSign,
    title: "What You Gain",
    text: "Clarity, accountability, strategic guidance, and personal growth.",
  },
  {
    icon: Mic,
    title: "Speaking Engagements",
    text: "Available for speaking engagements, workshops, and seminars on business and entrepreneurship, sales and marketing, mindset, financial discipline, and career clarity.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0A192F]">What I Do (Services)</h1>
        <p className="mt-4 max-w-3xl text-gray-600 leading-relaxed">
          Each service is designed to address specific business and personal growth challenges with practical implementation.
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
