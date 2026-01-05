"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProblemSectionCausal() {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[48%_52%] gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <Image
                src="/problem-workflow-diagram.png"
                alt="Causal Reasoning - System logic and mechanistic patterns"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />
            </div>

            {/* Pattern quality indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mt-6 p-5 rounded-xl bg-slate-900/50 border border-slate-800"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-slate-400">Optimisation Process by Trading Advisor AI</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "96.9%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                />
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Calibrated on 1.6M real operations • No hallucinations
              </div>
            </motion.div>

            {/* Decorative glow */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
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
              <span className="block mt-2 text-red-400">
                Generic AI Just Hallucinates.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Most bots follow 1970s textbooks and panic in volatile markets. 
              <span className="block mt-4 text-white font-semibold">
                ProfitRadar&apos;s AI uses Causal Reasoning
              </span>
              <span className="block mt-2 text-slate-400">
                — it doesn&apos;t just guess price direction; it understands the{" "}
                <span className="text-blue-400 font-semibold">WHY</span>{" "}
                behind every move.
              </span>
            </motion.p>

            {/* Key insight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-400 mb-2">The Mechanistic WHY</div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    Trained on <span className="text-white font-semibold">1.6M real trading operations</span>, 
                    not generic text. Calibrated on tens of thousands of backtests across{" "}
                    <span className="text-white font-semibold">Tier 1-4 scenarios</span> — 
                    AI knows both successful and failed patterns.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-3 text-sm text-slate-500"
            >
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Built on production infrastructure with 3 years of real trading data</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
