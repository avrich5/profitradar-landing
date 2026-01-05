"use client"

import { useState } from "react"
import { EarlyAccessModal } from "./early-access-modal"

/**
 * Footer for B2C Landing (profitradar.io)
 * Dark theme matching B2C landing pages
 * Content structure inspired by DIL footer
 */
export function FooterB2C() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <footer className="relative bg-slate-950 border-t border-slate-800">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12 py-16">
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            {/* Column 1: About ProfitRadar */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Profit<span className="text-[#9ff878]">Radar</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                AI-powered trading copilot that validates strategies against real market data. 
                Built on infrastructure processing 2000+ transactions per minute.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#9ff878] animate-pulse" />
                <span>$290M turnover • 1.6M operations</span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#9ff878]/10 hover:bg-[#9ff878]/20 text-[#9ff878] font-semibold rounded-lg border border-[#9ff878]/20 transition-all duration-200 group"
              >
                Join Early Access
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Column 2: For Developers */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">For Developers</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Access our empirical dataset built on millions of real trades. 
                Train hallucination-free AI advisors with 96.9% accuracy.
              </p>
              <a
                href="/dataset"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-semibold rounded-lg border border-blue-500/20 transition-all duration-200 group"
              >
                Explore Dataset
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-slate-400">
                <div>
                  <div className="text-sm font-semibold text-slate-300 mb-1">General Inquiries</div>
                  <a 
                    href="mailto:ac@dataintelligencelab.com" 
                    className="text-sm hover:text-[#9ff878] transition-colors"
                  >
                    ac@dataintelligencelab.com
                  </a>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-300 mb-1">US Market</div>
                  <a 
                    href="mailto:info_usa@dataintelligencelab.com" 
                    className="text-sm hover:text-[#9ff878] transition-colors"
                  >
                    info_usa@dataintelligencelab.com
                  </a>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-300 mb-1">Europe Market</div>
                  <a 
                    href="mailto:info_eu@dataintelligencelab.com" 
                    className="text-sm hover:text-[#9ff878] transition-colors"
                  >
                    info_eu@dataintelligencelab.com
                  </a>
                </div>
              </div>
            </div>
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
                <button onClick={() => setIsModalOpen(true)} className="hover:text-slate-300 transition-colors">
                  Early Access
                </button>
                <a href="/dataset" className="hover:text-slate-300 transition-colors">
                  Dataset
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

      {/* Early Access Modal */}
      <EarlyAccessModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="B2C"
      />
    </>
  )
}
