"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/shared/button"

export function DatasetHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-[140px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 lg:px-12 py-16">
        {/* Top: Badge */}
        <div className="mb-8">
          <div className="flex items-start justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-semibold text-slate-300">
                Built by{" "}
                <a 
                  href="https://dataintelligencelab.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors underline decoration-dotted"
                >
                  Data Intelligence Lab
                </a>
              </span>
            </motion.div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[45%_55%] gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Headline */}
            <h1 className="mb-8">
              <span className="block text-5xl lg:text-6xl font-bold text-white leading-tight mb-3">
                Ground your AI Trading decisions
              </span>
              <span className="block text-5xl lg:text-6xl font-bold text-[#9ff878] leading-tight">
                in Empirical Reality
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-8">
              Gain a <span className="text-[#9ff878] font-semibold">6-month head start</span> over competitors. 
              A dataset built on <span className="text-[#9ff878] font-semibold">millions of real trades</span> for 
              training hallucination-free AI advisors.
            </p>

            {/* Key Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-2xl font-bold text-[#9ff878] mb-1">96.9%</div>
                <div className="text-xs text-slate-400">Accuracy</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-2xl font-bold text-[#9ff878] mb-1">1-2 days</div>
                <div className="text-xs text-slate-400">Integration</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="text-2xl font-bold text-[#9ff878] mb-1">$750</div>
                <div className="text-xs text-slate-400">per month</div>
              </div>
            </div>

            {/* CTA Button */}
            <Button size="lg" className="w-full group bg-[#9ff878] hover:bg-[#78c368] text-slate-950 font-bold mb-6">
              Request Dataset Access
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>

            {/* Trust Indicators */}
            <div className="text-sm text-slate-500 text-center">
              Production proven • Millions of operations • Ready for fine-tuning
            </div>
          </motion.div>

          {/* Right: Split Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 gap-4 items-start"
          >
            {/* Left - Training Examples by Quality Tier */}
            <div className="relative w-fit mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/40 to-purple-500/10 rounded-2xl blur-2xl" />
              <div className="relative rounded-xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)] w-fit">
                <img
                  src="/dataset/Training Examples by Quality Tier.png"
                  alt="Training Examples by Quality Tier"
                  className="block"
                  style={{ maxHeight: '450px', width: 'auto' }}
                />
              </div>
              <div className="mt-3 text-xs text-slate-500 text-center">
                Training Examples
              </div>
            </div>

            {/* Right - Strategic Adviser POC */}
            <div className="relative -ml-10">
              <div className="absolute -inset-2 bg-gradient-to-br from-[#9ff878]/30 to-emerald-500/10 rounded-2xl blur-2xl" />
              <div className="relative rounded-xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                <img
                  src="/dataset/Strategic Adviser Model (POC Stage).png"
                  alt="96% Accuracy Results"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-3 text-xs text-slate-500 text-center">
                96% Accuracy Proof
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
