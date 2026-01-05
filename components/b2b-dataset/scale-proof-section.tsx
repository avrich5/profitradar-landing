"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ScaleProofSection() {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
            <span className="text-sm font-semibold text-slate-400">Scale & Proof</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Millions of Real Trades{" "}
            <span className="block mt-2 text-[#9ff878]">
              on Data Intelligence Lab Infrastructure
            </span>
          </h2>

          <p className="text-xl text-slate-400 leading-relaxed">
            Hundreds of validated patterns. Every training example is the result of{" "}
            <span className="text-white font-semibold">500+ backtest variations</span> across various market regimes.
          </p>
        </motion.div>

        {/* Visual Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Backtesting Heatmap */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <Image
                src="/dataset/Backtesting Heatmap.png"
                alt="Asset vs Pattern Performance Matrix"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-4 text-center">
              <div className="text-sm font-semibold text-slate-400">Asset vs Pattern Matrix</div>
            </div>
          </motion.div>

          {/* Right: Reasoning Density */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <Image
                src="/dataset/Reasoning Density Analysis.png"
                alt="Facts and Why statements per example"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            <div className="mt-4 text-center">
              <div className="text-sm font-semibold text-slate-400">Reasoning Density Metrics</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#9ff878] mb-2">500+</div>
                <div className="text-sm text-slate-400">Backtest variations per example</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#9ff878] mb-2">40-60</div>
                <div className="text-sm text-slate-400">Facts analyzed per example</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#9ff878] mb-2">All Regimes</div>
                <div className="text-sm text-slate-400">Bull, bear, sideways testing</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto p-6 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold text-white mb-2">Instability Zones Included</div>
              <div className="text-slate-400">
                We analyze where strategy logic breaks. AI learns from failures, not just successes — 
                critical for robust decision-making.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
