"use client"

import { motion } from "framer-motion"

export function QualityControlSection() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <img
                src="/dataset/Quality Tiers and Training Weights.png"
                alt="Distribution of Tiers 1-4 and training weights"
                className="w-full h-auto"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-slate-900/90 rounded-xl px-5 py-3 border border-purple-500/30 shadow-[0_10px_40px_rgba(168,85,247,0.3)]"
            >
              <div className="text-xs text-purple-400 font-semibold mb-1">Tier 1 Premium</div>
              <div className="text-xl font-bold text-purple-400">Fitness &gt; 0.6</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              <span className="text-sm font-semibold text-slate-400">Quality Control</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Mathematical{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Confidence
              </span>
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              We don't feed the model "noise."{" "}
              <span className="text-white font-semibold">1.0x training weight</span> is reserved 
              exclusively for Tier 1 (Premium) examples with fitness score &gt; 0.6.
            </p>

            {/* Tier breakdown */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-sm font-bold text-purple-400">
                  1
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">Tier 1 - Premium</div>
                  <div className="text-xs text-slate-400">
                    Fitness &gt; 0.6 • 1.0x weight • Highest quality patterns
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-sm font-bold text-slate-400">
                  2
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-300 mb-1">Tier 2 - Standard</div>
                  <div className="text-xs text-slate-500">
                    Fitness 0.4-0.6 • Reduced weight • Good patterns
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-700/50 flex items-center justify-center text-sm font-bold text-slate-400">
                  3-4
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-300 mb-1">Tier 3-4 - Context</div>
                  <div className="text-xs text-slate-500">
                    Lower fitness • Minimal weight • Learning from failures
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom insight */}
            <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20">
              <div className="flex items-start gap-3">
                <svg className="flex-shrink-0 w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <div className="text-sm text-slate-300">
                  <span className="font-semibold text-white">Weighted training</span> ensures 
                  AI learns most from proven patterns while understanding failure modes.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
