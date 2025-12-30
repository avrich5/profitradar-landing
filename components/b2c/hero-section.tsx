"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/shared/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-black via-app-gray to-rich-gray pb-0">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-green/8 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-glow-cyan/8 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-gray/50 border border-brand-green/20 mb-6"
            >
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-sm text-text-secondary">
                Powered by Data Intelligence Lab
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl lg:text-7xl font-bold text-text-primary leading-tight mb-6"
            >
              Your AI copilot for{" "}
              <span className="bg-gradient-to-r from-brand-green to-brand-green-dark bg-clip-text text-transparent">
                algorithmic trading
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl text-text-secondary leading-relaxed mb-8"
            >
              Stop guessing. Start validating. Build and test algorithmic strategies 
              against real market data before risking capital — powered by infrastructure 
              that processes 2000+ transactions per minute.
            </motion.p>

            {/* Time saved metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-green/10 border border-brand-green/20">
                <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-brand-green font-semibold">
                  Validate strategies in minutes instead of 10+ hours
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group">
                Start Free Validation
                <svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button size="lg" variant="secondary">
                See How It Works
              </Button>
            </motion.div>

            {/* Production metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mt-12 flex items-center gap-8 text-sm text-text-muted"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>290M turnover</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>1.6M operations</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Hero Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Glowing effect container */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/15 via-glow-cyan/8 to-transparent blur-3xl animate-pulse" />
              
              {/* Screenshot placeholder */}
              <div className="relative bg-gradient-to-br from-rich-gray to-card-bg rounded-2xl border-2 border-brand-green/20 p-8 shadow-2xl">
                {/* Header mockup */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>

                {/* Content mockup */}
                <div className="space-y-4">
                  <div className="h-8 bg-brand-green/10 rounded w-3/4" />
                  <div className="h-4 bg-text-muted/10 rounded w-full" />
                  <div className="h-4 bg-text-muted/10 rounded w-5/6" />
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="h-32 bg-card-bg rounded-lg border border-brand-green/10" />
                    <div className="h-32 bg-card-bg rounded-lg border border-brand-green/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metrics cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-card-bg/90 backdrop-blur-sm border border-brand-green/30 rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs text-text-muted mb-1">Win Rate</div>
              <div className="text-2xl font-bold text-brand-green">68.4%</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-card-bg/90 backdrop-blur-sm border border-glow-cyan/30 rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs text-text-muted mb-1">P&L</div>
              <div className="text-2xl font-bold text-glow-cyan">+$2,847</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
