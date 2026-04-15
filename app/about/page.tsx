import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Lukeman Tahiru and his consulting approach.",
};

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
        <Image
          src="/Lukeman.jpeg"
          alt="Lukeman Tahiru - Business Consultant"
          width={620}
          height={760}
          className="rounded-2xl shadow-xl w-full h-auto"
          loading="lazy"
        />
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A192F]">From Engineer to Growth Consultant</h1>
          <p className="mt-6 text-gray-600 leading-relaxed">
            Lukeman combines systems thinking with practical market strategy to help entrepreneurs build resilient businesses.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: TrendingUp, label: "Business Growth Systems" },
              { icon: Target, label: "Strategic Clarity" },
              { icon: Users, label: "Leadership Mentorship" },
              { icon: CheckCircle2, label: "Execution Accountability" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4">
                <div className="bg-amber-100 p-3 rounded-xl w-fit">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <p className="mt-3 font-semibold text-[#0A192F]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
