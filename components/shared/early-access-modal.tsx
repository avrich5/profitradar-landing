"use client"

import { useState } from "react"

interface EarlyAccessModalProps {
  isOpen: boolean
  onClose: () => void
  source: "B2C" | "B2B"
}

export function EarlyAccessModal({ isOpen, onClose, source }: EarlyAccessModalProps) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    role: "",
    sendDocs: true,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Prepare JSON payload
      const payload = {
        timestamp: new Date().toISOString(),
        source,
        email: formData.email,
        name: formData.name,
        company: formData.company || "Not provided",
        role: formData.role,
        send_docs: formData.sendDocs,
        page_url: window.location.href,
      }

      // Send to Web3Forms (free, no API key needed)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "a3e13dcb-2baf-4b3a-b612-925e57b4fe55", // Замінити на реальний ключ
          subject: `ProfitRadar Early Access - ${source}`,
          from_name: "ProfitRadar Landing",
          to: "ac@dataintelligencelab.com",
          message: JSON.stringify(payload, null, 2),
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch {
      setError("Network error. Please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
      // Reset form after modal closes
      setTimeout(() => {
        setFormData({ email: "", name: "", company: "", role: "", sendDocs: true })
        setIsSuccess(false)
        setError("")
      }, 300)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSuccess ? (
          // Success state
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#9ff878]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#9ff878]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You&apos;re on the waitlist!</h3>
            <p className="text-slate-400 mb-6">
              Check your email for confirmation and next steps.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-[#9ff878] hover:bg-[#8ee767] text-slate-950 font-bold rounded-lg transition-colors"
            >
              Got it
            </button>
          </div>
        ) : (
          // Form state
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Join Early Access
            </h2>
            <p className="text-slate-400 mb-6">
              Be the first to try ProfitRadar. We&apos;ll send you access details and documentation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9ff878] transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9ff878] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-[#9ff878] transition-colors"
                  placeholder="Optional"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Your Role *
                </label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-[#9ff878] transition-colors"
                >
                  <option value="">Select role...</option>
                  <option value="Trader">Trader</option>
                  <option value="Developer">Developer</option>
                  <option value="Quant">Quant Analyst</option>
                  <option value="Investor">Investor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Send docs checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="sendDocs"
                  checked={formData.sendDocs}
                  onChange={(e) => setFormData({ ...formData, sendDocs: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-800 text-[#9ff878] focus:ring-[#9ff878] focus:ring-offset-0"
                />
                <label htmlFor="sendDocs" className="text-sm text-slate-400 cursor-pointer">
                  Send me documentation & updates about ProfitRadar
                </label>
              </div>

              {/* Error message */}
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[#9ff878] hover:bg-[#8ee767] disabled:bg-slate-700 disabled:text-slate-500 text-slate-950 font-bold text-lg rounded-lg transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Join Waitlist"}
              </button>

              <p className="text-xs text-slate-500 text-center">
                By submitting, you agree to receive emails from ProfitRadar.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
