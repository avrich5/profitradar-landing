"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { EarlyAccessModal } from "@/components/shared/early-access-modal"

export function IntegrationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
    <section className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
              <span className="text-sm font-semibold text-slate-400">Integration & ROI</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready for Fine-tuning & RAG.{" "}
              <span className="block mt-2 text-[#9ff878]">
                Integration in 1-2 Days
              </span>
            </h2>

            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Use our JSONL format for OpenAI, Claude, Llama, or as a high-fidelity knowledge base 
              for RAG systems. Skip months of data engineering.
            </p>

            {/* Integration options */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Fine-tuning Ready</div>
                  <div className="text-xs text-slate-500">OpenAI, Claude, Llama compatible</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">RAG Integration</div>
                  <div className="text-xs text-slate-500">High-fidelity knowledge base</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">1-2 Days Setup</div>
                  <div className="text-xs text-slate-500">Production deployment speed</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 px-8 py-4 bg-[#9ff878] hover:bg-[#78c368] text-slate-950 font-bold text-lg rounded-xl transition-all duration-200 shadow-[0_0_30px_rgba(159,248,120,0.3)] hover:shadow-[0_0_40px_rgba(159,248,120,0.5)] inline-flex items-center justify-center group"
              >
                Request Access
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-lg rounded-xl border border-slate-700 transition-colors inline-flex items-center justify-center"
              >
                View Docs
              </button>
            </div>

            {/* Pricing hint */}
            <div className="mt-6 text-sm text-slate-500 text-center sm:text-left">
              Starting at $750/month • Enterprise pricing available
            </div>
          </motion.div>

          {/* Right: Visual - Parameter Adviser Model */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
              <Image
                src="/dataset/Parameter Adviser Model.png"
                alt="Stable training progress - decreasing loss and accuracy growth"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            {/* Training metrics overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-sm text-slate-400 mb-1">Training Progress</div>
                <div className="text-xl font-bold text-[#9ff878]">Stable Loss ↓</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-sm text-slate-400 mb-1">Peak Accuracy</div>
                <div className="text-xl font-bold text-[#9ff878]">96% →</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Early Access Modal */}
      <EarlyAccessModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="B2B"
      />
    </>
  )
}
