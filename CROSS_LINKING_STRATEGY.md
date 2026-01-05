# Cross-Linking Strategy
## ProfitRadar Landing Pages Navigation

**Date:** January 2026  
**Status:** Design Proposal (No Code Yet)

---

## 🎯 Website Structure

### 1. **profitradar.io** (B2C - Main Landing)
- **Audience:** Retail traders, algo enthusiasts
- **Goal:** Sign up for Free Trial
- **Current Hero:** Video demo of AI Strategy Generation
- **Current CTA:** No button yet (only video)

### 2. **profitradar.io/dataset** (B2B - Dataset Landing)
- **Audience:** Developers, quant engineers, AI researchers
- **Goal:** Request Dataset Access
- **Current Hero:** Split visual (Training Examples + Strategic Adviser POC)
- **Current CTA:** "Request Dataset Access" button

### 3. **poc.profitradar.io** (Live App - Free Trial)
- **Location:** `/Users/andriy/VisualStudio/profit-radar-io/www`
- **Audience:** Users who clicked "Start Free Trial"
- **Goal:** Onboard users to working product

### 4. **dataintelligencelab.com** (Parent Company)
- **Audience:** Enterprise clients, investors, partners
- **Goal:** Build credibility, showcase infrastructure

---

## 🔗 Proposed Cross-Linking Placement

### A. **profitradar.io (B2C)** → Others

#### 1. Hero Section (Top Right Badge)
**Current:**
```tsx
<span className="text-sm font-semibold text-slate-300">
  Built by{" "}
  <a href="https://dataintelligencelab.com" ...>
    Data Intelligence Lab
  </a>
</span>
```

**✅ Keep as is** - Good subtle link to parent company

---

#### 2. Hero Section - Missing Primary CTA
**Current:** Only video, no buttons

**❌ Problem:** No clear path to Free Trial!

**✅ Proposed:** Add Primary CTA below video

**Placement:** Below video, left-aligned with content column

```tsx
{/* CTA Section - Below Video */}
<div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
  {/* Primary CTA - Free Trial */}
  <a 
    href="https://poc.profitradar.io" 
    className="px-8 py-4 bg-[#9ff878] hover:bg-[#78c368] text-slate-950 
               font-bold rounded-xl transition-all duration-200 
               flex items-center gap-2 group"
  >
    Start Free Trial
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </a>

  {/* Secondary CTA - Dataset for Developers */}
  <a 
    href="/dataset" 
    className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 
               font-semibold rounded-xl border border-slate-700/50 
               transition-all duration-200"
  >
    For Developers →
  </a>
</div>
```

**Visual Hierarchy:**
- Primary (Green): Free Trial → `poc.profitradar.io`
- Secondary (Gray): Dataset → `/dataset`

---

#### 3. Problem/Solution Section - Inline Link
**Current:** Text mentions "Three AI models" but no link

**✅ Proposed:** Add inline text link in Problem/Solution section

**Placement:** Inside paragraph about AI models

```tsx
<p className="text-xl text-slate-300 leading-relaxed">
  Three AI models created on{" "}
  <a 
    href="/dataset" 
    className="text-blue-400 hover:text-blue-300 underline decoration-dotted 
               transition-colors"
  >
    one empirical dataset
  </a>
  {" "}perform three roles — Parameter Adviser, Optimisation Helper, Strategic Adviser.
</p>
```

**Why:** Natural discovery for technical users curious about training data

---

#### 4. Footer Section - Full Navigation Menu
**Current:** No footer

**✅ Proposed:** Add sticky footer with all links

**Placement:** Bottom of all pages

```tsx
<footer className="relative z-50 bg-slate-950 border-t border-slate-800">
  <div className="max-w-7xl mx-auto px-8 py-12">
    <div className="grid md:grid-cols-4 gap-8">
      {/* Column 1: Product */}
      <div>
        <h3 className="text-white font-bold mb-4">Product</h3>
        <ul className="space-y-2 text-sm text-slate-400">
          <li>
            <a href="/" className="hover:text-[#9ff878] transition-colors">
              AI Trading Copilot
            </a>
          </li>
          <li>
            <a href="https://poc.profitradar.io" 
               className="hover:text-[#9ff878] transition-colors">
              Free Trial
            </a>
          </li>
        </ul>
      </div>

      {/* Column 2: Developers */}
      <div>
        <h3 className="text-white font-bold mb-4">For Developers</h3>
        <ul className="space-y-2 text-sm text-slate-400">
          <li>
            <a href="/dataset" 
               className="hover:text-blue-400 transition-colors">
              Empirical Dataset
            </a>
          </li>
          <li>
            <a href="/dataset#integration" 
               className="hover:text-blue-400 transition-colors">
              API Access
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3: Company */}
      <div>
        <h3 className="text-white font-bold mb-4">Company</h3>
        <ul className="space-y-2 text-sm text-slate-400">
          <li>
            <a href="https://dataintelligencelab.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="hover:text-slate-300 transition-colors">
              Data Intelligence Lab ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Column 4: Logo */}
      <div className="flex items-center justify-end">
        <div className="text-2xl font-bold text-white">
          Profit<span className="text-[#9ff878]">Radar</span>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

### B. **profitradar.io/dataset (B2B)** → Others

#### 1. Hero Section - Existing Link ✅
**Current:** Badge link to Data Intelligence Lab - **Keep as is**

---

#### 2. Hero Section - Modify CTA to Add Secondary Path
**Current:** Only "Request Dataset Access" button

**✅ Proposed:** Add subtle link to B2C product

**Placement:** Below primary CTA button

```tsx
<div className="space-y-4">
  {/* Primary CTA - Request Access (Keep existing) */}
  <Button size="lg" className="w-full group bg-[#9ff878] hover:bg-[#78c368] 
                               text-slate-950 font-bold">
    Request Dataset Access
    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
         fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </Button>

  {/* Secondary Link - Try Trading Copilot */}
  <div className="text-center">
    <span className="text-sm text-slate-500">
      Looking for trading copilot?{" "}
      <a 
        href="/" 
        className="text-[#9ff878] hover:text-[#78c368] underline 
                   decoration-dotted transition-colors"
      >
        Try ProfitRadar AI
      </a>
    </span>
  </div>
</div>
```

---

#### 3. Integration Section - Add Free Trial Mention
**Current:** Only API/Dataset integration info

**✅ Proposed:** Add call-out box for non-developers

**Placement:** After Integration Section, before footer

```tsx
{/* For Non-Developers Callout */}
<div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#9ff878]/10 to-emerald-500/10 
                border border-[#9ff878]/20">
  <div className="max-w-3xl mx-auto text-center">
    <h3 className="text-2xl font-bold text-white mb-3">
      Not a developer? Try our trading copilot instead
    </h3>
    <p className="text-slate-400 mb-6">
      No coding required. Start validating strategies with AI in minutes.
    </p>
    <div className="flex justify-center gap-4">
      <a 
        href="/" 
        className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 
                   text-slate-300 font-semibold rounded-xl 
                   border border-slate-700/50 transition-all duration-200"
      >
        Learn More
      </a>
      <a 
        href="https://poc.profitradar.io" 
        className="px-6 py-3 bg-[#9ff878] hover:bg-[#78c368] 
                   text-slate-950 font-bold rounded-xl 
                   transition-all duration-200"
      >
        Start Free Trial →
      </a>
    </div>
  </div>
</div>
```

---

#### 4. Footer - Same as B2C
**✅ Use identical footer** from B2C landing (code above)

---

### C. **poc.profitradar.io (App)** → Others

**Note:** Need to check current structure in `/Users/andriy/VisualStudio/profit-radar-io/www`

**✅ Proposed Placements:**

#### 1. App Header/Nav - Subtle Links
```tsx
<nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
  <div className="flex items-center gap-8">
    <div className="text-xl font-bold">
      Profit<span className="text-[#9ff878]">Radar</span>
    </div>
    
    {/* Navigation Links */}
    <div className="hidden md:flex items-center gap-6 text-sm">
      <a href="https://profitradar.io/dataset" 
         className="text-slate-400 hover:text-blue-400 transition-colors">
        Dataset for Developers
      </a>
      <a href="https://dataintelligencelab.com" 
         target="_blank"
         className="text-slate-400 hover:text-slate-300 transition-colors">
        About Data Intelligence Lab ↗
      </a>
    </div>
  </div>
</nav>
```

#### 2. Onboarding Flow - Mention Dataset
**Placement:** Inside onboarding tooltip or info section

```tsx
<div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
  <div className="text-sm text-slate-400">
    💡 <strong>For Developers:</strong> Access our{" "}
    <a href="https://profitradar.io/dataset" 
       className="text-blue-400 hover:text-blue-300 underline">
      empirical dataset
    </a>
    {" "}to train your own AI models
  </div>
</div>
```

---

### D. **dataintelligencelab.com** → ProfitRadar

**Note:** Need to check current structure

**✅ Proposed Placements:**

#### 1. Products/Portfolio Section
```tsx
<div className="grid md:grid-cols-2 gap-8">
  {/* ProfitRadar Card */}
  <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
    <h3 className="text-2xl font-bold text-white mb-3">
      Profit<span className="text-[#9ff878]">Radar</span>
    </h3>
    <p className="text-slate-400 mb-6">
      AI-powered trading copilot that validates strategies against real market data.
      Built on $290M+ turnover infrastructure.
    </p>
    <div className="flex gap-3">
      <a href="https://profitradar.io" 
         className="px-4 py-2 bg-[#9ff878] hover:bg-[#78c368] 
                    text-slate-950 font-semibold rounded-lg transition-all">
        Try Free
      </a>
      <a href="https://profitradar.io/dataset" 
         className="px-4 py-2 bg-slate-800 hover:bg-slate-700 
                    text-slate-300 font-semibold rounded-lg 
                    border border-slate-700 transition-all">
        Developer Dataset
      </a>
    </div>
  </div>
</div>
```

#### 2. Footer Links
```tsx
<div>
  <h4 className="text-white font-bold mb-4">Products</h4>
  <ul className="space-y-2 text-sm text-slate-400">
    <li>
      <a href="https://profitradar.io" 
         className="hover:text-[#9ff878] transition-colors">
        ProfitRadar AI Copilot
      </a>
    </li>
    <li>
      <a href="https://profitradar.io/dataset" 
         className="hover:text-blue-400 transition-colors">
        Empirical Dataset for Developers
      </a>
    </li>
  </ul>
</div>
```

---

## 📊 Summary Table

| From | To | Placement | Link Type | Priority |
|------|----|-----------|-----------|---------| 
| **B2C (/)** | poc.profitradar.io | Hero CTA (Primary) | Button (Green) | 🔴 **Critical** |
| **B2C (/)** | /dataset | Hero CTA (Secondary) | Button (Gray) | 🟡 **High** |
| **B2C (/)** | /dataset | Problem section | Inline text link | 🟢 **Medium** |
| **B2C (/)** | dataintelligencelab.com | Badge (existing) | Text link | ✅ **Done** |
| **B2C (/)** | All | Footer nav | Menu links | 🟡 **High** |
| | | | |
| **B2B (/dataset)** | / | Below CTA | Text link | 🟡 **High** |
| **B2B (/dataset)** | poc.profitradar.io | Callout section | Button (Green) | 🟢 **Medium** |
| **B2B (/dataset)** | dataintelligencelab.com | Badge (existing) | Text link | ✅ **Done** |
| **B2B (/dataset)** | All | Footer nav | Menu links | 🟡 **High** |
| | | | |
| **App (poc)** | /dataset | Header nav | Text link | 🟢 **Medium** |
| **App (poc)** | dataintelligencelab.com | Header nav | Text link | 🟢 **Medium** |
| **App (poc)** | /dataset | Onboarding tooltip | Info box | 🔵 **Low** |
| | | | |
| **DIL (parent)** | / & /dataset | Products section | Card with buttons | 🟡 **High** |
| **DIL (parent)** | / & /dataset | Footer | Menu links | 🟢 **Medium** |

---

## 🎨 Visual Hierarchy Rules

### Button Colors:
- **Primary Action (Free Trial):** `bg-[#9ff878]` (Bright green)
- **Secondary Action (Learn More):** `bg-slate-800/50` (Dark gray)
- **Dataset Links:** `text-blue-400` (Blue accent)

### Link Styles:
- **Bold Call-to-Action:** Button with arrow icon
- **Inline Context Link:** Underlined text with dotted decoration
- **Navigation Link:** Plain text hover effect
- **External Link:** Arrow icon `↗` indicator

### Placement Priority:
1. **Hero Section:** Most visible, primary CTAs only
2. **Content Sections:** Contextual inline links
3. **Footer:** Complete site map
4. **Header/Nav:** Persistent cross-product links

---

## ✅ Next Steps

1. **Review & Approve** this strategy
2. **Implement B2C Hero CTA** (most critical - no Free Trial button!)
3. **Add Footer** to both landing pages
4. **Check `poc.profitradar.io`** structure for header links
5. **Coordinate with DIL** website team for backlinks

---

**Questions to Answer:**

1. ❓ Should "Request Dataset Access" link to form or email?
2. ❓ Do we have `dataintelligencelab.com` website live?
3. ❓ What's the onboarding flow in `poc.profitradar.io`?
4. ❓ Any analytics goals for cross-link tracking?

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Author:** ProfitRadar Team