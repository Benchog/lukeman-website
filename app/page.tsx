import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  DollarSign,
  MessageCircle,
  Mic,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { HomeHero } from "@/components/home-hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Business consulting, mentorship, and speaking that drives measurable growth.",
};

export default function Home() {
  const services = [
    { icon: TrendingUp, title: "Business Growth", text: "Build repeatable systems that move revenue forward." },
    { icon: Target, title: "Strategy", text: "Turn vision into clear priorities and practical execution plans." },
    { icon: Users, title: "Mentorship", text: "Get accountable support to grow as a founder and leader." },
    { icon: DollarSign, title: "Finance", text: "Improve cash flow, decisions, and long-term profitability." },
    { icon: Mic, title: "Speaking", text: "Inspire teams and communities with practical transformation talks." },
    { icon: Wrench, title: "Execution", text: "Close the gap between planning and real-world implementation." },
  ];
  return (
    <>
      <HomeHero />

      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">Premium Services Built for Real Results</h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
            Every engagement is focused on practical implementation, measurable outcomes, and sustainable growth.
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
                <h3 className="mt-4 text-xl md:text-2xl font-semibold text-[#0A192F]">{title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">Why Clients Choose Me</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: "Results-Driven Advisory", icon: TrendingUp },
              { title: "Context-Aware Strategy", icon: Target },
              { title: "Hands-On Mentorship", icon: Users },
              { title: "Clear Financial Direction", icon: DollarSign },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="bg-amber-100 p-3 rounded-xl w-fit">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="mt-4 text-xl md:text-2xl font-semibold text-[#0A192F]">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F]">How I Work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Understand your problem", "Build a clear strategy", "Execute with precision", "Refine for results"].map(
              (step) => (
                <div key={step} className="rounded-2xl bg-white p-6 shadow-lg">
                  <div className="bg-amber-100 p-3 rounded-xl w-fit">
                    <CheckCircle2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[#0A192F]">{step}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let&apos;s Build Something That Actually Works</h2>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Strategic support for entrepreneurs and teams who are serious about growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://calendly.com"
              target="_blank"
              className="rounded-2xl bg-amber-500 px-6 py-3 font-semibold text-[#0A192F] transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Session
            </Link>
            <Link
              href="https://wa.me/233599117796"
              target="_blank"
              className="rounded-2xl border border-slate-400 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
