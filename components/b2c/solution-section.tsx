"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/shared/button"

export function SolutionSection() {
  const steps = [
    {
      number: 1,
      title: "Design",
      subtitle: "Strategy Creation",
      description: "Chat with AI or use visual builder to define your trading logic. Natural language transforms into executable strategy.",
      features: ["AI-powered translation", "Visual strategy builder", "Indicator library access"]
    },
    {
      number: 2,
      title: "Optimization",
      subtitle: "Parameter Tuning",
      description: "Automatically find optimal parameters across historical data. No guesswork, just systematic exploration.",
      features: ["Grid search optimization", "Walk-forward analysis", "Overfitting detection"]
    },
    {
      number: 3,
      title: "Stress Testing",
      subtitle: "Edge Case Validation",
      description: "Test against extreme market conditions, flash crashes, low liquidity periods. Know how your strategy breaks.",
      features: ["Black swan scenarios", "Volatility stress tests", "Slippage simulation"]
    },
    {
      number: 4,
      title: "Strategy Family",
      subtitle: "Variations & Combinations",
      description: "Generate strategy variations automatically. Test different entry/exit combinations, timeframes, and instruments.",
      features: ["Automated variations", "Multi-timeframe testing", "Portfolio diversification"]
    },
    {
      number: 5,
      title: "Paper Trading",
      subtitle: "Live Simulation",
      description: "Deploy to paper trading environment. See real-time performance before risking capital.",
      features: ["Real market data", "Live order simulation", "Performance tracking"]
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-deep-black via-rich-gray to-app-gray overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-glow-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6"
          >
            <span className="text-sm font-semibold text-brand-green">The Solution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
          >
            Five steps from idea to{" "}
            <span className="bg-gradient-to-r from-brand-green to-brand-green-dark bg-clip-text text-transparent">
              validated strategy
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-text-secondary leading-relaxed"
          >
            Professional validation pipeline that transforms market insights into 
            battle-tested algorithmic strategies. Each step builds confidence.
          </motion.p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative mb-20">
          {/* Connection line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green/20 via-brand-green/40 to-brand-green/20 hidden lg:block" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Step number badge */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark flex items-center justify-center text-2xl font-bold text-deep-black shadow-lg">
                    {step.number}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-brand-green/30 blur-xl animate-pulse" />
                </div>

                {/* Content card */}
                <div className="bg-card-bg rounded-xl border border-brand-green/10 p-6 hover:border-brand-green/30 transition-all duration-300 group">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-brand-green transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-sm text-brand-green/80 font-semibold mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-text-muted">
                        <svg className="w-3 h-3 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card-bg rounded-2xl border border-brand-green/20 p-8">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Ready to validate your strategy?
              </h3>
              <p className="text-text-secondary">
                Start with AI-powered strategy creation. Get backtest results in minutes.
              </p>
            </div>
            <Button size="lg" className="flex-shrink-0">
              Start Free Validation
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
