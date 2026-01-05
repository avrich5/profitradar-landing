# Footer Components - Implementation Guide

**Created:** January 2026  
**Status:** Ready for Developer Integration  
**Style:** Dark theme matching landing pages (NOT DIL white style)

---

## 📂 Files Created

### 1. **FooterB2C** - For profitradar.io (Main Landing)
**Location:** `/components/shared/footer-b2c.tsx`

**Design:**
- **Dark theme:** `bg-slate-950` with `border-slate-800`
- **Text colors:** white headings, slate-400 body, slate-500 muted
- **Brand accent:** Green (#9ff878) for ProfitRadar logo and hover states
- **3-column grid layout** matching landing page style

**Content Structure (from DIL):**
1. **About ProfitRadar** - Product description + trust indicators
2. **For Developers** - Dataset CTA with blue button
3. **Contact** - Email addresses (General, US, EU)

---

### 2. **FooterB2B** - For profitradar.io/dataset
**Location:** `/components/shared/footer-b2b.tsx`

**Design:**
- **Dark theme:** `bg-slate-950` with `border-slate-800`
- **Text colors:** white headings, slate-400 body, slate-500 muted
- **Brand accent:** Blue (#3b82f6) pulse dot, Green (#9ff878) for CTA
- **3-column grid layout** matching landing page style

**Content Structure (from DIL):**
1. **About Dataset** - Dataset description + trust indicators
2. **For Traders** - Trading Copilot CTA with green button
3. **Contact** - Email addresses (Dataset, US, EU)

---

## 🎨 Design System

### Background & Borders:
- **Background:** `bg-slate-950` (dark, matches landing pages)
- **Border:** `border-slate-800` (subtle separation)
- **Cards/Buttons:** `bg-[color]/10` with `border-[color]/20`

### Typography:
- **Logo:** `text-xl font-bold text-white` with accent color
- **Headings:** `text-lg font-bold text-white`
- **Body:** `text-slate-400 leading-relaxed`
- **Muted:** `text-slate-500`
- **Labels:** `text-slate-300 font-semibold`

### Colors:
- **B2C Primary:** `#9ff878` (Green) - logo, hover states, CTAs
- **B2B Accent:** `#3b82f6` (Blue) - pulse dot, hover states
- **Text Hierarchy:** `white` → `slate-300` → `slate-400` → `slate-500`

### Interactive States:
- **Links:** `hover:text-slate-300` (general)
- **B2C Links:** `hover:text-[#9ff878]` (green accent)
- **B2B Links:** `hover:text-blue-400` (blue accent)
- **Buttons:** `hover:bg-[color]/20` with `group-hover:translate-x-1` icon

### Spacing:
- **Container:** `max-w-[1800px] mx-auto px-8 lg:px-12 py-16`
- **Grid:** `grid lg:grid-cols-3 gap-12`
- **Bottom Bar:** `pt-8 border-t border-slate-800`

---

## 🔗 Cross-Links Included

### FooterB2C Links:
| Link | Destination | Hover Color |
|------|-------------|-------------|
| Data Intelligence Lab (top) | https://dataintelligencelab.com | slate-300 |
| Explore Dataset (button) | /dataset | Blue (#3b82f6) |
| Email links | mailto: | Green (#9ff878) |
| Free Trial (bottom) | https://poc.profitradar.io | slate-300 |
| Dataset (bottom) | /dataset | slate-300 |
| DIL (bottom) | https://dataintelligencelab.com | slate-300 |

### FooterB2B Links:
| Link | Destination | Hover Color |
|------|-------------|-------------|
| Data Intelligence Lab (top) | https://dataintelligencelab.com | slate-300 |
| Try Trading Copilot (button) | / | Green (#9ff878) |
| Email links | mailto: | Blue (#3b82f6) |
| Trading Copilot (bottom) | / | slate-300 |
| Free Trial (bottom) | https://poc.profitradar.io | slate-300 |
| DIL (bottom) | https://dataintelligencelab.com | slate-300 |

---

## 📧 Contact Emails

**All Footers Include:**
- **General Inquiries / Dataset Inquiries:** ac@dataintelligencelab.com
- **US Market:** info_usa@dataintelligencelab.com
- **Europe Market:** info_eu@dataintelligencelab.com

---

## 🛠️ Integration Instructions (For Developers)

### Import and Use

**For B2C Page (app/page.tsx):**
```tsx
import { FooterB2C } from "@/components/shared/footer-b2c"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSectionRedesign />
      <ProblemSectionRedesign />
      <SolutionSectionRedesign />
      <DatasetSectionRedesign />
      
      {/* Add Footer */}
      <FooterB2C />
    </main>
  )
}
```

**For B2B Page (app/dataset/page.tsx):**
```tsx
import { FooterB2B } from "@/components/shared/footer-b2b"

export default function DatasetPage() {
  return (
    <main className="min-h-screen">
      <DatasetHeroSection />
      <DatasetProblemSection />
      <DataArchitectureSection />
      <ScaleProofSection />
      <QualityControlSection />
      <IntegrationSection />
      
      {/* Add Footer */}
      <FooterB2B />
    </main>
  )
}
```

---

## ✅ Quality Checklist

Before merging to production:

- [ ] Dark background matches landing pages (`bg-slate-950`)
- [ ] Border color consistent (`border-slate-800`)
- [ ] Text hierarchy correct (white → slate-400 → slate-500)
- [ ] All email links work (`mailto:` tested)
- [ ] External links open in new tab with `rel="noopener noreferrer"`
- [ ] Internal links navigate correctly
- [ ] Hover states work with correct accent colors
- [ ] B2C green (#9ff878) vs B2B blue (#3b82f6) distinction clear
- [ ] Animations don't cause layout shift
- [ ] Mobile responsive (3-col → 1-col)
- [ ] Framer Motion installed and working

---

## 🎯 Key Features

- ✅ **Dark theme** - matches landing pages (NOT white like DIL)
- ✅ **Content structure from DIL** - 3 columns, bottom bar
- ✅ **Brand colors** - Green for B2C, Blue/Green for B2B
- ✅ **Cross-linking** - B2C ↔ B2B ↔ DIL ↔ POC
- ✅ **Contact info** - 3 email addresses included
- ✅ **Trust indicators** - $290M turnover, operations count
- ✅ **Framer Motion** - staggered entrance animations
- ✅ **Responsive** - grid collapses on mobile

---

## 🔄 What Changed from DIL Style?

| DIL Footer | ProfitRadar Footer |
|------------|-------------------|
| White background | Dark slate-950 |
| Dark text on light | Light text on dark |
| Subtle borders | Slate-800 borders |
| Standard buttons | Glass-morphism buttons |
| Static layout | Framer Motion animations |

**Content structure preserved:**
- ✅ 3-column grid layout
- ✅ Company description column
- ✅ Cross-product promotion column
- ✅ Contact column
- ✅ Bottom copyright bar with quick links

---

## 📝 Notes

1. **Style:** Dark theme matching landing pages, NOT white DIL theme
2. **Content:** Structure inspired by DIL footer (3 cols + bottom bar)
3. **Not Integrated:** Standalone components, waiting for production branch
4. **Ready to Use:** Just import and render

---

**Questions?** Contact developers or refer to `CROSS_LINKING_STRATEGY.md`

**Version:** 2.0 (Dark theme)  
**Last Updated:** January 2026