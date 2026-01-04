"use client"

import { motion } from "framer-motion"

export function DatasetProblemSection() {
  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
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
              <span className="text-sm font-semibold text-slate-400">The Core Problem</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              AI that sounds smart{" "}
              <span className="block mt-2 text-blue-400">
                vs. AI that makes defensible decisions
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Most models teach AI what people <span className="text-white font-semibold">write</span> about 
              the market (Reddit, Investopedia).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 rounded-xl bg-blue-500/5 border border-blue-500/20"
            >
              <div className="text-2xl font-bold text-blue-400 mb-3">
                Our dataset teaches how strategies actually behave in reality
              </div>
              <div className="text-slate-400">
                Built on millions of real operations, not social media opinions.
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
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <img
                src="/dataset/Key Features.png"
                alt="Key Features - No Hallucinations, Chain-of-Thought, Statistical Rigor"
                className="w-full h-auto"
              />
            </div>

            {/* Floating highlight cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-slate-900/90 rounded-xl px-5 py-3 border border-blue-500/30 shadow-[0_10px_40px_rgba(59,130,246,0.3)]"
            >
              <div className="text-xs text-blue-400 font-semibold mb-1">No Hallucinations</div>
              <div className="text-sm font-bold text-white">Evidence-Based</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="absolute -top-6 -right-6 backdrop-blur-xl bg-slate-900/90 rounded-xl px-5 py-3 border border-cyan-500/30 shadow-[0_10px_40px_rgba(34,211,238,0.3)]"
            >
              <div className="text-xs text-cyan-400 font-semibold mb-1">Chain-of-Thought</div>
              <div className="text-sm font-bold text-white">15+ Reasoning Steps</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
