"use client"

import { motion } from "framer-motion"

export function DatasetSectionRedesign() {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#9ff878]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
              <span className="text-sm font-semibold text-slate-400">Powered By</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Causal Reasoning Dataset
              <span className="block mt-2 text-[#9ff878]">Tier 1-4 Training</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              AI trained on tens of thousands of real backtests, not generic language models. 
              Each example includes mechanistic "Why" — teaching real market logic, not just correlations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#9ff878]/10 flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#9ff878]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-2">Tier 1: Elite Patterns</div>
                      <div className="text-sm text-slate-400">
                        40-60 causal explanations per strategy • Highest validation accuracy
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#9ff878]/10 flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#9ff878]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-2">Calibrated on Millions Operations</div>
                      <div className="text-sm text-slate-400">
                        Real production data • 3 years of trading history • All market conditions
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#9ff878]/10 flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#9ff878]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white mb-2">Success & Failure Scenarios</div>
                      <div className="text-sm text-slate-400">
                        AI knows what works AND what doesn't • Avoids common pitfalls
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#9ff878]/20 to-emerald-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <img
                src="/dataset-analytics.png"
                alt="Causal Reasoning Dataset - Pattern Library Analytics with Tier structure"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
