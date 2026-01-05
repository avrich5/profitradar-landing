"use client"

import { motion } from "framer-motion"

export function SolutionSectionRedesign() {
  const steps = [
    {
      number: 1,
      title: "Describe",
      subtitle: "Talk to AI Advisor",
      description: "Explain your strategy in plain English. AI trained on tens of thousands of real backtests understands your intent.",
      visual: "/step-describe.png",
      highlight: "Natural language → Strategy logic",
      maxWidth: "max-w-lg"
    },
    {
      number: 2,
      title: "Generate",
      subtitle: "Causal Configuration",
      description: "AI configures strategy using Causal Reasoning based on 1.6M operations. Not guessing — modeling real market mechanics.",
      visual: "/step-generate.png",
      highlight: "Pattern Genome calibration",
      maxWidth: "max-w-lg"
    },
    {
      number: 3,
      title: "Win",
      subtitle: "Validated Results",
      description: "See performance before risking capital. Tested against real exchange conditions: slippage, spreads, fees.",
      visual: "/step-win.png",
      highlight: "90% precision modeling",
      maxWidth: "max-w-2xl"
    }
  ]

  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#9ff878]/5 rounded-full blur-[120px]" />
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
            <span className="text-[#9ff878]">
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

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className={`grid lg:grid-cols-[48%_52%] gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                {/* Step number badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9ff878] to-emerald-600 flex items-center justify-center text-2xl font-bold text-slate-950 shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-[#9ff878]/30 blur-xl" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {step.title}
                    </h3>
                    <div className="text-sm text-[#9ff878] font-semibold">
                      {step.subtitle}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Highlight callout */}
                <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#9ff878]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#9ff878]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-[#9ff878]">
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
                  className={`relative ${step.maxWidth} mx-auto`}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#9ff878]/20 to-emerald-500/10 rounded-3xl blur-3xl" />
                  
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-[0_20px_70px_rgba(0,0,0,0.5)]">
                    <img
                      src={step.visual}
                      alt={`${step.title} - ${step.subtitle}`}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
