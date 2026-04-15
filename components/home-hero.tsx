"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mic } from "lucide-react";

const bullets = [
  "Results-driven strategies",
  "Practical business solutions",
  "Built for real-world success",
];

export function HomeHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Helping Individuals & Businesses Unlock Growth, Clarity, and Profitability
          </h1>
          <p className="mt-6 text-gray-200 leading-relaxed max-w-xl">
            I work with entrepreneurs, professionals, and organizations to build strong systems, develop winning mindsets, and achieve sustainable business and financial growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://calendly.com/lukemantahiru/30min?month=2026-04"
              target="_blank"
              className="rounded-2xl bg-amber-500 px-6 py-3 text-[#0A192F] font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-[1.02]"
            >
              Book a Session <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border border-white/50 px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              Work With Me
            </Link>
            <Link
              href="/speaking"
              className="rounded-2xl border border-white/50 px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2"
            >
              <Mic className="w-5 h-5" />
              Invite Me to Speak
            </Link>
          </div>
          <div className="mt-8 space-y-2">
            {bullets.map((item) => (
              <p key={item} className="text-gray-200 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" /> {item}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <Image
            src="/Lukeman.jpeg"
            alt="Lukeman Tahiru - Business Consultant"
            width={560}
            height={640}
            className="rounded-2xl shadow-xl w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
