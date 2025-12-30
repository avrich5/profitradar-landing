"use client"

import { motion } from "framer-motion"

export function ProblemSection() {
  const painPoints = [
    {
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Hours lost on data preparation"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      text: "Look-ahead bias destroying results"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      text: "Excel can't handle millions of trades"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "No confidence in the numbers"
    }
  ]

  return (
    <section className="relative py-32 bg-rich-gray overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
              className="inline-block px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
            >
              <span className="text-sm font-semibold text-red-400">The Problem</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
            >
              The backtest nightmare
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-text-secondary leading-relaxed mb-8"
            >
              Manual backtesting means juggling spreadsheets, wrestling with APIs, 
              debugging data inconsistencies, and questioning every result. 
              <span className="block mt-4 text-text-primary font-semibold">
                One strategy validation = 10+ hours of work.
              </span>
            </motion.p>

            {/* Pain points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              {painPoints.map((pain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-text-secondary"
                >
                  <div className="flex-shrink-0">{pain.icon}</div>
                  <span className="text-lg">{pain.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Chaos visualization */}
            <div className="relative bg-gradient-to-br from-card-bg to-rich-gray rounded-2xl border-2 border-red-500/20 p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>

              {/* Messy content mockup */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-8 bg-text-muted/5 rounded flex items-center px-3">
                    <span className="text-xs text-text-muted/40">spreadsheet.xlsx</span>
                  </div>
                  <div className="w-8 h-8 bg-text-muted/5 rounded" />
                </div>

                {/* Scattered elements */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 bg-text-muted/5 rounded border border-text-muted/10 opacity-40" style={{ transform: 'rotate(-2deg)' }} />
                  <div className="h-16 bg-text-muted/5 rounded border border-text-muted/10 opacity-60" style={{ transform: 'rotate(1deg)' }} />
                  <div className="h-16 bg-text-muted/5 rounded border border-text-muted/10 opacity-50" style={{ transform: 'rotate(-1deg)' }} />
                  <div className="h-16 bg-text-muted/5 rounded border border-text-muted/10 opacity-70" style={{ transform: 'rotate(2deg)' }} />
                  <div className="h-16 bg-text-muted/5 rounded border border-text-muted/10 opacity-45" style={{ transform: 'rotate(-3deg)' }} />
                  <div className="h-16 bg-text-muted/5 rounded border border-text-muted/10 opacity-55" style={{ transform: 'rotate(1deg)' }} />
                </div>

                {/* Code snippets mess */}
                <div className="space-y-2 mt-6">
                  <div className="h-3 bg-red-500/10 rounded w-[60%]" />
                  <div className="h-3 bg-red-500/10 rounded w-[75%]" />
                  <div className="h-3 bg-red-500/10 rounded w-[50%]" />
                  <div className="h-3 bg-red-500/10 rounded w-[85%]" />
                  <div className="h-3 bg-red-500/10 rounded w-[65%]" />
                </div>

                {/* Error indicators */}
                <div className="flex items-center gap-2 mt-6 p-3 bg-red-500/10 border border-red-500/20 rounded">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-red-400">Data inconsistency detected</span>
                </div>
              </div>

              {/* Floating "10+ hours" badge */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -right-4 bg-red-500/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-xl"
              >
                <div className="text-xs text-white/80 font-semibold">Takes</div>
                <div className="text-2xl font-bold text-white">10+ hrs</div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
