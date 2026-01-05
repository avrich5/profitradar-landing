"use client"

import { motion } from "framer-motion"

export function OpportunitySection() {
  const capabilities = [
    {
      title: "Think → Strategy",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: "Describe how you see the market: \"Buy when momentum shifts and volatility drops.\" AI translates your thinking into executable algorithmic strategy — no coding required."
    },
    {
      title: "Validate → Confidence",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: "Test against real market conditions using infrastructure we trust ourselves. Three years of real trading proved accuracy. Results you can actually believe in."
    },
    {
      title: "Iterate → Improve",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: "AI copilot makes experimentation fast and interesting. Try variations, see what works, refine your edge. Strategy creation becomes creative, not tedious."
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-rich-gray via-app-gray to-deep-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-text-primary mb-8 leading-tight"
          >
            Create algorithmic strategies the way you{" "}
            <span className="bg-gradient-to-r from-brand-green to-brand-green-dark bg-clip-text text-transparent">
              think about markets
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl lg:text-2xl text-text-primary leading-relaxed font-semibold mb-4"
          >
            The problem wasn&apos;t backtesting itself — it was that nobody trusted the results.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-text-secondary leading-relaxed"
          >
            We do. Three years using our own infrastructure for real trading proved the accuracy. 
            Now AI makes strategy creation actually enjoyable.
          </motion.p>
        </motion.div>

        {/* 3-Column Grid - FIXED HEIGHT */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="relative group h-full"
            >
              <div className="relative bg-card-bg rounded-2xl border border-brand-green/10 p-8 hover:border-brand-green/30 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-green/10 text-brand-green mb-6 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed flex-grow">
                  {capability.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-brand-green/10 to-brand-green/5 rounded-2xl border-2 border-brand-green/20 p-8 lg:p-12">
            <p className="text-xl lg:text-2xl text-text-primary leading-relaxed text-center font-semibold">
              We&apos;ve been using this infrastructure for real trading for 3 years. 
              When backtests show performance, we trust them — because we&apos;ve seen it translate to live results. 
              <span className="block mt-4 text-brand-green">
                Now you have access to the same validation engine.
              </span>
            </p>
          </div>
        </motion.div>

        {/* NEW LAYOUT: Screenshot + Text Side-by-Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-12"
        >
          {/* Left: Screenshot */}
          <div className="relative">
            {/* Screenshot placeholder - REPLACE with real image */}
            <div className="relative bg-gradient-to-br from-card-bg to-rich-gray rounded-2xl border-2 border-brand-green/20 overflow-hidden shadow-2xl">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-transparent" />
              
              {/* Header */}
              <div className="relative flex items-center gap-2 px-6 py-4 bg-rich-gray/50 border-b border-brand-green/10">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>

              {/* Content - Strategy Builder mockup */}
              <div className="relative p-6 space-y-4">
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-8">
                    {[1, 2, 3, 4, 5].map((step) => (
                      <div key={step} className="flex flex-col items-center gap-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          step === 1 
                            ? 'bg-brand-green text-deep-black' 
                            : 'bg-brand-green/10 text-brand-green/40'
                        }`}>
                          {step}
                        </div>
                        <span className={`text-xs ${step === 1 ? 'text-brand-green' : 'text-text-muted/40'}`}>
                          {['Design', 'Optimization', 'Stress Testing', 'Strategy Family', 'Paper Trading'][step - 1]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategy info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-text-muted text-sm">Trading Pair:</span>
                    <div className="px-3 py-1 bg-brand-green/10 rounded text-brand-green font-semibold">BTCUSDT</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-text-muted text-sm">Timeframe:</span>
                    <div className="px-3 py-1 bg-brand-green/10 rounded text-brand-green font-semibold">1M</div>
                  </div>
                </div>

                {/* Strategy code preview */}
                <div className="bg-deep-black/50 rounded-lg p-4 font-mono text-xs text-brand-green/80 space-y-1">
                  <div>Enter Long:</div>
                  <div className="pl-4">EMA(3M,9) CROSS-UP EMA(3M,21)</div>
                  <div className="mt-2">Exit Long:</div>
                  <div className="pl-4">RSI(3M,10) {'>='}  70 OR EMA(3M,9) CROSS-DOWN EMA(3M,21)</div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 h-10 bg-card-bg text-text-muted rounded-lg border border-text-muted/20 text-sm">
                    Quick Test
                  </button>
                  <button className="flex-1 h-10 bg-[linear-gradient(135deg,#9FF878_0%,#78C368_100%)] text-deep-black font-semibold rounded-lg text-sm">
                    Next Step →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="space-y-8">
            {/* Transform Statement */}
            <div>
              <p className="text-xl text-text-secondary leading-relaxed mb-6">
                This isn&apos;t about solving the &quot;backtest problem&quot; — it&apos;s about making strategy creation enjoyable.{" "}
                <span className="text-text-primary font-semibold">AI handles the technical translation.</span> You focus on market insights.{" "}
                <span className="text-text-primary font-semibold">Infrastructure you can trust delivers validation.</span>
              </p>
            </div>

            {/* Before/After Comparison */}
            <div className="grid grid-cols-2 gap-4">
              {/* Traditional */}
              <div className="bg-card-bg rounded-xl border border-red-500/20 p-6">
                <div className="text-xs font-semibold text-red-400 mb-4 uppercase tracking-wide">Traditional</div>
                <div className="space-y-2">
                  {["Manual coding", "Uncertain results", "Trust issues", "Frustration"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-text-muted text-sm">
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ProfitRadar */}
              <div className="bg-card-bg rounded-xl border border-brand-green/30 p-6">
                <div className="text-xs font-semibold text-brand-green mb-4 uppercase tracking-wide">ProfitRadar</div>
                <div className="space-y-2">
                  {["Natural conversation", "Proven infrastructure", "Confident validation", "Creative exploration"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                      <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="pt-4">
              <p className="text-sm text-text-muted leading-relaxed">
                Infrastructure processing 2000+ transactions/minute. Three years live trading. 
                290M turnover validated methodology.{" "}
                <span className="text-text-secondary font-semibold">
                  This isn&apos;t theory — it&apos;s what we actually use.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
