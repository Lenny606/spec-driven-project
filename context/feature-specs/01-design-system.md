# DESIGN SYSTEM COMPONENTS

Read **GEMINI.md** and **ui-context.md** before implementing the design system.

## OVERVIEW
This document defines the core UI components required for the Random Event Generator. All components must be built using **Tailwind CSS** and **Lucide React** for icons, strictly following the color palette and glassmorphism principles.

**Components Directory**: `src/components/ui` (All base design system components should reside here).

---

## 1. BUTTONS
Premium buttons with smooth transitions and subtle depth.

- **Base Styles**: `px-6 py-2.5 rounded-lg font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2`
- **Primary**: `bg-indigo-500 text-white hover:bg-indigo-600 shadow-md hover:shadow-indigo-500/20`
- **Secondary**: `bg-pink-500 text-white hover:bg-pink-600 shadow-md hover:shadow-pink-500/20`
- **Ghost/Outline**: `border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50`
- **Glass**: `bg-white/20 backdrop-blur-md border border-white/30 text-slate-900 hover:bg-white/30`

---

## 2. INPUTS & TEXTAREAS
Clean, accessible fields with a high-end feel.

- **Base Styles**: `w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all`
- **Glass Variant**: `bg-white/10 backdrop-blur-md border-white/20 text-slate-900 placeholder:text-slate-500 focus:bg-white/20`
- **Textarea**: Same as input, but with `min-h-[120px] resize-none`.

---

## 3. EVENT CARDS (THE PREMIUM COMPONENT)
The centerpiece of the application discovery experience.

- **Structure**: `bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl overflow-hidden`
- **Header**: Large typography with high contrast (`text-2xl font-bold text-slate-900`).
- **Content**: Organized sections for date, location, and description using Lucide icons (`Calendar`, `MapPin`, `Info`).
- **Footer**: Action area for "Promote" or "Edit" buttons.

---

## 4. TYPOGRAPHY
- **Heading 1**: `text-4xl md:text-5xl font-black tracking-tight text-slate-900`
- **Heading 2**: `text-2xl font-bold text-slate-800`
- **Body**: `text-base text-slate-600 leading-relaxed`
- **Muted**: `text-sm text-slate-400`

---

## 5. FEEDBACK & MESSAGES
- **Success**: `bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg flex items-center gap-2`
- **Error**: `bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2`

## ICONOGRAPHY
- Always use **Lucide React** components.
- Standard icon size: `w-5 h-5` for buttons, `w-4 h-4` for inline text metadata.