"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/shared/button"

export function HeroSectionCausal() {
  return (
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
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]"
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
          className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-blue-500/8 rounded-full blur-[140px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 lg:px-12 py-16">
        {/* Top: Badge Right */}
        <div className="mb-8">
          <div className="flex items-start justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-slate-300">
                Built by{" "}
                <a 
                  href="https://dataintelligencelab.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors underline decoration-dotted"
                >
                  Data Intelligence Lab
                </a>
              </span>
            </motion.div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Headline - 2 lines */}
            <h1 className="mb-8">
              <span className="block text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent leading-tight mb-2">
                Trade with Pro Confidence
              </span>
              <span className="block text-3xl lg:text-4xl font-bold text-white leading-tight">
                Your profit radar calibrated with AI
              </span>
            </h1>

            {/* Subheadline - larger */}
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-3">
              AI copilot with more than{" "}
              <span className="text-white font-semibold">90% precision</span>. 
              Trained on our proprietary{" "}
              <a 
                href="#dataset" 
                className="text-blue-400 hover:text-blue-300 underline decoration-dotted transition-colors"
              >
                Causal Reasoning Dataset
              </a>
              {" "}with millions real operations and backtests.
            </p>

            {/* Key Differentiator - larger text */}
            <div className="flex items-start gap-3 p-5 rounded-xl bg-blue-500/5 border border-blue-500/20 mb-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-base font-semibold text-blue-400 mb-1">No AI Hallucinations</div>
                <div className="text-base text-slate-400">
                  Not a generic language models.
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button size="lg" className="w-full group bg-green-600 hover:bg-green-500 mb-6">
              Get Your Profitable Edge — Free Trial
              <svg 
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>$290M turnover</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>1.6M operations</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>3 years production</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Premium glow */}
            <div className="absolute -inset-4 bg-gradient-to-br from-green-500/20 to-blue-500/10 rounded-3xl blur-3xl" />
            
            {/* Video container */}
            <div className="relative">
              <video
                src="/Trading_Terminal_Video_Generation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Secondary CTA below video */}
            <div className="mt-6 flex justify-end">
              <Button variant="secondary" size="lg" className="border-slate-700 hover:border-slate-600">
                Explore Causal Dataset →
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
