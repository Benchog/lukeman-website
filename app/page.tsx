import type { Metadata } from "next";
import Image from "next/image";
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
    { icon: TrendingUp, title: "Business strategy and growth", text: "Build strategy that improves sales performance and long-term growth." },
    { icon: Target, title: "Sales and marketing improvement", text: "Develop practical marketing strategies and stronger customer relationships." },
    { icon: DollarSign, title: "Financial growth and sustainability", text: "Build better financial discipline and sustainable growth decisions." },
    { icon: Users, title: "Mentorship and accountability", text: "Gain clarity, accountability, and strategic guidance for growth." },
    { icon: Mic, title: "Speaking and workshops", text: "Invite Lukeman for practical talks on business, mindset, and growth." },
    { icon: Wrench, title: "Execution and productivity", text: "Improve execution quality and follow-through on key goals." },
  ];
  return (
    <>
      <HomeHero />

      <section id="services" className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F]">Services</h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
            Through my work, I help individuals and organizations gain clarity, build effective strategies, improve execution, and create environments where people thrive.
          </p>
          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl bg-white p-5 sm:p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="bg-amber-100 p-3 rounded-xl w-fit">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#0A192F]">{title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F]">Why Clients Choose Me</h2>
          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2">
            {[
              { title: "Practical and real-world approach", icon: TrendingUp },
              { title: "Focus on results and execution", icon: Target },
              { title: "Strong understanding of business and growth systems", icon: Users },
              { title: "Passion for helping people succeed", icon: CheckCircle2 },
              { title: "Clear, simple, and actionable guidance", icon: DollarSign },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="bg-amber-100 p-3 rounded-xl w-fit">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#0A192F]">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F]">How I Work</h2>
          <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Understand your problem", "Build a clear strategy", "Execute with precision", "Refine for results"].map(
              (step) => (
                <div key={step} className="rounded-2xl bg-white p-5 sm:p-6 shadow-lg">
                  <div className="bg-amber-100 p-3 rounded-xl w-fit">
                    <CheckCircle2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#0A192F]">{step}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-16 bg-[#0A192F]">
        <Image
          src="/Lukeman.jpeg"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A192F]/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Let&apos;s Build Something That Actually Works</h2>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Ready to take your business or personal growth to the next level?
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="https://calendly.com/lukemantahiru/30min?month=2026-04"
              target="_blank"
              className="w-full sm:w-auto min-h-11 text-center rounded-2xl bg-amber-500 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-[#0A192F] transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Session
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VbApoWOFCCodhVPcxI3b"
              target="_blank"
              className="w-full sm:w-auto min-h-11 justify-center rounded-2xl border border-slate-400 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Join My Mentorship
            </Link>
            <Link
              href="/speaking"
              className="w-full sm:w-auto min-h-11 justify-center rounded-2xl border border-slate-400 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2"
            >
              <Mic className="w-5 h-5" />
              Invite to Speak
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
