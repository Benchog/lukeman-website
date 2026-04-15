import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Lukeman Tahiru and his consulting approach.",
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 sm:gap-10 lg:grid-cols-2 items-center">
        <Image
          src="/Lukeman.jpeg"
          alt="Lukeman Tahiru - Business Consultant"
          width={620}
          height={760}
          className="rounded-2xl shadow-xl w-full h-auto"
          loading="lazy"
        />
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#0A192F]">About Me</h1>
          <p className="mt-6 text-gray-600 leading-relaxed">
            I am an Agricultural Engineer turned Business Development Enthusiast, Consultant, and Mentor with a strong passion for helping people and businesses reach their full potential.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I believe that success is not just about working hard, but about thinking right, building strong systems, and developing the right relationships.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: TrendingUp, label: "Business growth and strategy" },
              { icon: Target, label: "Sales and marketing excellence" },
              { icon: Users, label: "Personal development and mindset transformation" },
              { icon: CheckCircle2, label: "Financial growth and sustainability" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl bg-slate-50 p-4 sm:p-5">
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
