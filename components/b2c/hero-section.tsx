"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/shared/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-black via-app-gray to-rich-gray pb-0">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-glow-cyan/8 rounded-full blur-3xl"
        />
        
        {/* Full-height gradient from right edge - SPREADING EFFECT */}
        <div className="absolute right-0 top-0 bottom-0 w-[900px] bg-gradient-to-l from-brand-green/35 via-brand-green/15 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-[700px] bg-gradient-to-l from-brand-green/25 via-glow-cyan/12 to-transparent blur-3xl" />
        <div className="absolute right-0 top-0 bottom-0 w-[500px] bg-gradient-to-l from-glow-cyan/20 via-brand-green/10 to-transparent blur-2xl" />
      </div>

      <div className="relative z-10 max-w-[2800px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[28%_72%] gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6"
            >
              <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm font-semibold text-brand-green">Powered by Data Intelligence Lab</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
            >
              Stop Guessing.{" "}
              <span className="block mt-2">
                Start Trading with a{" "}
                <span className="bg-gradient-to-r from-brand-green to-brand-green-dark bg-clip-text text-transparent">
                  Verified Edge
                </span>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg text-text-secondary leading-relaxed mb-8"
            >
              The era of manual trading is over. Use infrastructure that processes{" "}
              <span className="text-text-primary font-semibold">2000+ transactions per minute</span>. 
              AI trained on{" "}
              <span className="text-text-primary font-semibold">1.6M real operations</span> — 
              describe your path to profit in plain English.
            </motion.p>

            {/* Value Prop Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-green/10 border border-brand-green/30 mb-8"
            >
              <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-brand-green font-semibold text-sm">
                Validate strategies in minutes instead of 10+ hours
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="lg" className="group">
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
              <Button variant="secondary" size="lg">
                See How It Works
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex items-center gap-6 text-sm text-text-muted"
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

          {/* Right: GIANT Screenshot - CLEAN REBUILD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:ml-[150px] lg:scale-110"
          >
            {/* Glow effect behind screenshot */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/30 to-glow-cyan/20 rounded-3xl blur-[100px]" />
            
            {/* Screenshot - direct image, no complex container */}
            <div className="relative">
              <Image
                src="/createstrategywithai08.png"
                alt="Backtest Results showing Win Rate 97.5% and profit curve"
                width={1200}
                height={800}
                className="w-full h-auto rounded-3xl border-2 border-brand-green/30 shadow-[0_20px_80px_rgba(159,248,120,0.3)]"
              />

              {/* Floating metrics badges - NO BACKGROUND */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute top-8 -right-4 backdrop-blur-md rounded-xl px-4 py-3 border-2 border-brand-green/60 shadow-[0_10px_40px_rgba(159,248,120,0.3)]"
              >
                <div className="text-xs text-brand-green font-semibold mb-1">Win Rate</div>
                <div className="text-3xl font-bold text-brand-green">97.2%</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-8 -right-4 backdrop-blur-md rounded-xl px-4 py-3 border-2 border-glow-cyan/60 shadow-[0_10px_40px_rgba(0,255,255,0.3)]"
              >
                <div className="text-xs text-glow-cyan font-semibold mb-1">P&L</div>
                <div className="text-3xl font-bold text-glow-cyan">+$7,835.24</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
