"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { EarlyAccessModal } from "@/components/shared/early-access-modal"

export function HeroSectionRedesign() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
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
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#9ff878]/10 rounded-full blur-[120px]"
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
            className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-[#9ff878]/8 rounded-full blur-[140px]"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-12 py-32">
          {/* Top: Badge */}
          <div className="mb-8">
            <div className="flex items-start justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#9ff878] animate-pulse" />
                <span className="text-sm font-semibold text-slate-300">
                  Built by{" "}
                  <a 
                    href="https://dataintelligencelab.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#9ff878] transition-colors underline decoration-dotted"
                  >
                    Data Intelligence Lab
                  </a>
                </span>
              </motion.div>
            </div>
          </div>

          {/* Content Grid: 45/55 split */}
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
                  Trade with Pro Confidence
                </span>
                <span className="block text-5xl lg:text-6xl font-bold text-[#9ff878] leading-tight">
                  Your profit radar calibrated with AI
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                AI trained on its own dataset of causal reasoning with millions of backtests. 
                Shows over{" "}
                <span className="text-[#9ff878] font-semibold">90% accuracy</span> during validation.
                <span className="block mt-3">
                  Three AI models created on one dataset perform three roles — <span className="text-[#9ff878] font-semibold">Parameter Adviser, 
                  Optimisation Helper, Strategic Adviser.</span>
                </span>
              </p>

              {/* Key Differentiator */}
              <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#9ff878]/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#9ff878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#9ff878] mb-2">No AI Hallucinations</div>
                    <div className="text-sm text-slate-400">
                      Not a generic language model. Trained on real market mechanics.
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="text-sm text-slate-500 text-center">
                $290M turnover • 1.6M operations • 3 years production
              </div>
            </motion.div>

            {/* Right: Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-[#9ff878]/20 to-emerald-500/10 rounded-3xl blur-3xl" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)] mb-6">
                <video
                  src="/AI Strategy Family Generation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* CTA Button */}
              <div className="relative z-20 flex justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="relative z-20 inline-flex items-center gap-3 px-8 py-4 bg-[#9ff878] hover:bg-[#8ee767] text-slate-950 font-bold text-lg rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(159,248,120,0.3)] hover:shadow-[0_0_40px_rgba(159,248,120,0.5)] group cursor-pointer"
                >
                  Join Early Access
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Early Access Modal */}
      <EarlyAccessModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="B2C"
      />
    </>
  )
}
