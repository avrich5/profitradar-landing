# ProfitRadar Landings - User Guide

## 🚀 Quick Start

### Development Server
```bash
cd /Users/andriy/VisualStudio/profitradar-landings/site
npm run dev
```

Server runs on: **http://localhost:8001**

---

## 📄 Available Landings

### 1. B2C Landing (Causal Reasoning)
**URL:** `http://localhost:8001/`

**Target Audience:** Individual traders seeking AI-powered trading strategies

**Key Sections:**
- **Hero**: "Create strategy with AI" - AI copilot positioning
- **Problem**: Causal reasoning vs generic AI
- **Solution**: Verified win rates, production proven infrastructure

**Design:**
- Green brand color (#9ff878)
- Causal reasoning messaging
- AI copilot terminology
- Focus: accessibility + professional credibility

**Key Metrics:**
- 96.9% accuracy (pattern recognition)
- 290M turnover
- 1.6M operations

---

### 2. B2B Dataset Landing
**URL:** `http://localhost:8001/dataset`

**Target Audience:** AI startups building trading models

**Key Sections:**

1. **Hero** - "Ground your AI Trading decisions in Empirical Reality"
   - 6-month head start message
   - Training Examples by Quality Tier visual
   - 96% Accuracy proof
   - Stats: 96.9%, 1-2 days, $750/month

2. **Problem** - "AI that sounds smart vs AI that makes defensible decisions"
   - Key Features visual
   - Anti-hallucination focus

3. **Data Architecture** - "Instruction-Input-Output Architecture"
   - JSONL structure diagram
   - SYSTEM/USER/ASSISTANT roles
   - 15+ "Why:" reasoning statements

4. **Scale & Proof** - "Millions of Real Trades on Data Intelligence Lab"
   - Backtesting Heatmap
   - Reasoning Density Analysis
   - 500+ backtests, 40-60 facts per example

5. **Quality Control** - "Mathematical Confidence"
   - Quality Tiers visual (Tier 1-4)
   - 1.0x weight for fitness > 0.6

6. **Integration** - "Ready for Fine-tuning & RAG. Integration in 1-2 Days"
   - Parameter Adviser Model
   - OpenAI/Claude/Llama compatible
   - Pricing: $750/month starter

**Design:**
- Green brand color (#9ff878) for positive highlights
- Blue-to-Cyan gradients for B2B tech feel
- Dark mode optimized
- 6 complete sections with 7 visual assets

**Key Metrics:**
- 96.9% pattern recognition accuracy
- 40-60 explanations per example
- 500+ backtest variations
- Millions of operations
- 1-2 days integration
- $750/month pricing

---

## 🎨 Brand Colors

```css
--brand-green: #9ff878
--brand-green-dark: #78c368
```

**Usage:**
- Headlines: White + green highlights
- Stats/metrics: Green
- CTA buttons: Green background with dark text
- Positive elements: Green

---

## 📁 Project Structure

```
site/
├── app/
│   ├── page.tsx              # B2C landing (root)
│   └── dataset/
│       └── page.tsx          # B2B dataset landing
│
├── components/
│   ├── b2c/                  # B2C components
│   │   ├── hero-section-causal.tsx
│   │   ├── problem-section-causal.tsx
│   │   └── solution-section-causal.tsx
│   │
│   ├── b2b-dataset/          # B2B dataset components
│   │   ├── hero-section.tsx
│   │   ├── problem-section.tsx
│   │   ├── architecture-section.tsx
│   │   ├── scale-proof-section.tsx
│   │   ├── quality-control-section.tsx
│   │   └── integration-section.tsx
│   │
│   └── shared/
│       └── button.tsx        # Reusable button component
│
└── public/
    └── dataset/              # B2B visual assets (10 PNG files)
```

---

## 🔧 Common Tasks

### Add New Section
1. Create component in appropriate directory (`b2c/` or `b2b-dataset/`)
2. Import in page file
3. Add to page layout
4. Follow design system (green highlights, dark backgrounds)

### Update Visual Assets
- B2C: Add to `/public/` root
- B2B: Add to `/public/dataset/`
- Use PNG format with Display P3 color profile

### Modify Colors
Edit `site/app/globals.css`:
```css
--brand-green: #9ff878;
--brand-green-dark: #78c368;
```

### Build for Production
```bash
npm run build
npm run start
```

---

## 📋 Messaging Rules

### B2C (Causal Reasoning)
- **Tone**: Accessible, empowering
- **Target**: Individual traders
- **Focus**: AI copilot, causal reasoning
- **Terminology**: "AI copilot", "verified win rate"
- **Avoid**: Overpromising returns, aggressive language

### B2B (Dataset)
- **Tone**: Collaborative, technically credible
- **Target**: AI startups
- **Focus**: Anti-hallucination, production proven
- **Terminology**: "Production proven", "empirical reality"
- **Avoid**: Defensive tone, repeated metrics

### Universal Rules
✅ Each metric appears ONCE per landing
✅ 96.9% accuracy only as "pattern recognition"
✅ Green for positive highlights
✅ No stock photos, product-first visuals

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 8002
```

### Images Not Loading
1. Check file exists in `/public/` or `/public/dataset/`
2. Restart dev server
3. Hard refresh browser (Cmd+Shift+R)

### Styling Issues
1. Clear `.next` cache: `rm -rf .next`
2. Restart dev server
3. Check Tailwind config

### Hot Reload Not Working
```bash
# Kill existing process
lsof -ti:8001 | xargs kill -9

# Restart
npm run dev
```

---

## 📊 Quality Checklist

Before pushing:
- [ ] All images load correctly
- [ ] Green brand color used consistently
- [ ] Headlines use white + green highlights
- [ ] Metrics appear only once per landing
- [ ] Animations work smoothly on scroll
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] CTAs are clickable
- [ ] Text is readable (contrast ratio)

---

## 🔗 Key Documentation

- **Technical Spec**: `/ʼTechnical Specification for Landing Page Development ProfitRadar Empirical Dataset (v2.0) .md`
- **Review Checklist**: `/REVIEW_CHECKLIST.md`
- **Messaging Framework**: `/FOUNDATIONS_MESSAGING_FRAMEWORK_FINAL_RU.md`
- **Brief**: `/BRIEF_AI_FRONTEND_DEVELOPER_PROFITRADAR_LANDINGS.md`

---

## 📦 Tech Stack

- **Framework**: Next.js 19 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Language**: TypeScript 5
- **Port**: 8001

---

## 🎯 Quick Links

- B2C Landing: `http://localhost:8001/`
- B2B Dataset: `http://localhost:8001/dataset`
- GitHub: `origin/causal_reasoning` branch
- Data Intelligence Lab: https://dataintelligencelab.com

---

**Last Updated**: January 2026
**Version**: 1.0
**Status**: Production Ready
