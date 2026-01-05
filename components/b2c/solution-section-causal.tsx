"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/shared/button"

export function SolutionSectionCausal() {
  const steps = [
    {
      number: 1,
      title: "Describe",
      subtitle: "Talk to AI Advisor",
      description: "Explain your strategy in plain English. AI trained on tens of thousands of real backtests understands your intent.",
      visual: "/step-1-describe.png",
      highlight: "Natural language → Strategy logic"
    },
    {
      number: 2,
      title: "Generate",
      subtitle: "Causal Configuration",
      description: "AI configures strategy using Causal Reasoning based on 1.6M operations. Not guessing — modeling real market mechanics.",
      visual: "/step-2-generate.png",
      highlight: "Pattern Genome calibration"
    },
    {
      number: 3,
      title: "Win",
      subtitle: "Validated Results",
      description: "See performance before risking capital. Tested against real exchange conditions: slippage, spreads, fees.",
      visual: "/step-3-win.png",
      highlight: "90% precision modeling"
    }
  ]

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-12">
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
            className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6"
          >
            <span className="text-sm font-semibold text-slate-400">The Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            From Intent to{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Validated Strategy
            </span>
            {" "}in 60 Seconds
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            Professional quant workflow, now accessible through conversational AI. 
            Every step powered by our proprietary Causal Reasoning Dataset.
          </motion.p>
        </motion.div>

        {/* Steps with visuals */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className={`grid lg:grid-cols-[45%_55%] gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                {/* Step number badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-green-500/30 blur-xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {step.title}
                    </h3>
                    <div className="text-sm text-green-400 font-semibold">
                      {step.subtitle}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Highlight callout */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-400">
                      {step.highlight}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]"
                >
                  <Image
                    src={step.visual}
                    alt={`${step.title} - ${step.subtitle}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                  
                  {/* Floating glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dataset Tier Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <div className="bg-slate-950 rounded-3xl border border-slate-800 p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Dataset info */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <span className="text-sm font-semibold text-blue-400">Powered By</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Causal Reasoning Dataset
                  <span className="block mt-2 text-blue-400">Tier 1-4 Training</span>
                </h3>

                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  AI trained on tens of thousands of real backtests, not generic language models. 
                  Each example includes mechanistic &quot;Why&quot; — teaching real market logic, not just correlations.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">Tier 1: Elite Patterns</div>
                      <div className="text-sm text-slate-500">
                        40-60 causal explanations per strategy • Highest validation accuracy
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">Calibrated on 1.6M Operations</div>
                      <div className="text-sm text-slate-500">
                        Real production data • 3 years of trading history • All market conditions
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">Success & Failure Scenarios</div>
                      <div className="text-sm text-slate-500">
                        AI knows what works AND what doesn&apos;t • Avoids common pitfalls
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="border-blue-500/30 hover:border-blue-500/50"
                  >
                    Explore B2B Dataset →
                  </Button>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/dataset-training-dashboard.jpeg"
                    alt="Causal Reasoning Dataset - Tier structure and pattern quality"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -bottom-6 -right-6 backdrop-blur-xl bg-slate-900/90 rounded-xl px-5 py-3 border border-green-500/30 shadow-[0_10px_40px_rgba(34,197,94,0.2)]"
                >
                  <div className="text-xs text-green-400 font-semibold mb-1">Pattern Genome</div>
                  <div className="text-xl font-bold text-green-400">150+ Validated</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                <Image
                  src="/proof-accuracy-chart.png"
                  alt="AI Training Progress - Accuracy curve reaching 96%"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 backdrop-blur-xl bg-slate-900/90 rounded-xl px-5 py-3 border border-green-500/30 shadow-[0_10px_40px_rgba(34,197,94,0.2)]">
                <div className="text-xs text-green-400 font-semibold mb-1">Peak Accuracy</div>
                <div className="text-3xl font-bold text-green-400">96%</div>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6">
                <span className="text-sm font-semibold text-slate-400">The Proof</span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Math Don&apos;t Lie.{" "}
                <span className="block mt-2 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  96% Modeling Precision
                </span>
              </h3>

              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                We don&apos;t sell a &quot;black box.&quot; Our AI is calibrated on{" "}
                <span className="text-white font-semibold">1.6M real trades</span>, 
                ensuring highest market reality match.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white mb-2">Production-Proven Infrastructure</div>
                    <div className="text-slate-400">
                      $290M turnover • 1.6M operations • 3 years real trading data
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white mb-2">Built by{" "}
                      <a 
                        href="https://dataintelligencelab.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-dotted"
                      >
                        Data Intelligence Lab
                      </a>
                    </div>
                    <div className="text-slate-400">
                      Professional quant team • Production infrastructure • Real market conditions
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white mb-2">Transparent & Verifiable</div>
                    <div className="text-slate-400">
                      No black box • Full backtest transparency • Real exchange conditions
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-400">AI Model Accuracy</span>
                  <span className="text-lg font-bold text-green-400">96.9%</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "96.9%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                  />
                </div>
                <div className="mt-3 text-xs text-slate-500">
                  Pattern recognition trained on 1.6M operations
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-slate-950 rounded-3xl border border-slate-800 p-10">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to build with Causal Reasoning?
              </h3>
              <p className="text-slate-400">
                Start validating strategies with AI trained on 1.6M real operations.
              </p>
            </div>
            <Button size="lg" className="flex-shrink-0 bg-green-600 hover:bg-green-500">
              Start Free Trial
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
