"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProblemSectionRedesign() {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#9ff878]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[48%_52%] gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#9ff878]/20 to-emerald-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <Image
                src="/reasoning-density-analysis.png"
                alt="Reasoning Density Analysis - Chain-of-thought explanations per training example"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-slate-900/90 rounded-xl px-5 py-3 border border-[#9ff878]/30 shadow-[0_10px_40px_rgba(159,248,120,0.3)]"
            >
              <div className="text-xs text-[#9ff878] font-semibold mb-1">Training Quality</div>
              <div className="text-sm font-bold text-white">96.9% Accuracy</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6"
            >
              <span className="text-sm font-semibold text-slate-400">The Problem</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Emotions Kill Deposits.{" "}
              <span className="block mt-2">
                Generic AI Just <span className="text-red-400">Hallucinates</span>.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Most bots follow outdated textbooks and panic in volatile markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 rounded-xl bg-[#9ff878]/5 border border-[#9ff878]/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#9ff878]/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#9ff878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#9ff878] mb-2">
                    ProfitRadar uses Causal Reasoning
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    Trained on <span className="text-white font-semibold">millions trading operations</span>, 
                    not generic text. Calibrated on tens of thousands of backtests across{" "}
                    <span className="text-white font-semibold">Tier 1-4 scenarios</span> — 
                    AI knows both successful and failed patterns.
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
