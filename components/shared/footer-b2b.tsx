"use client"

import { motion } from "framer-motion"

/**
 * Footer for B2B Dataset Landing (profitradar.io/dataset)
 * Dark theme matching B2B landing pages
 * Content structure inspired by DIL footer
 */
export function FooterB2B() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-[1800px] mx-auto px-8 lg:px-12 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About Dataset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Profit<span className="text-[#9ff878]">Radar</span> Dataset
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Empirical dataset built on millions of real trades for training hallucination-free 
              AI advisors. 96.9% accuracy during validation. Ready for fine-tuning.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Production proven • Millions of operations</span>
            </div>
          </motion.div>

          {/* Column 2: For Traders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">For Traders</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Not a developer? Try our AI trading copilot. 
              Validate strategies in minutes with no coding required.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#9ff878]/10 hover:bg-[#9ff878]/20 
                         text-[#9ff878] font-semibold rounded-lg border border-[#9ff878]/20 
                         transition-all duration-200 group"
            >
              Try Trading Copilot
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-slate-400">
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Dataset Inquiries</div>
                <a 
                  href="mailto:ac@dataintelligencelab.com" 
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  ac@dataintelligencelab.com
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">US Market</div>
                <a 
                  href="mailto:info_usa@dataintelligencelab.com" 
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  info_usa@dataintelligencelab.com
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-300 mb-1">Europe Market</div>
                <a 
                  href="mailto:info_eu@dataintelligencelab.com" 
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  info_eu@dataintelligencelab.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div>
              © 2018-2025{" "}
              <a 
                href="https://dataintelligencelab.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors font-semibold"
              >
                Data Intelligence Lab, Inc
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="/" className="hover:text-slate-300 transition-colors">
                Trading Copilot
              </a>
              <a href="https://poc.profitradar.io" className="hover:text-slate-300 transition-colors">
                Free Trial
              </a>
              <a 
                href="https://dataintelligencelab.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors"
              >
                Data Intelligence Lab ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
