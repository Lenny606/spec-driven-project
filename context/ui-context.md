# UI CONTEXT

## APPEARANCE
- **Mode**: Only **Light Mode** is supported. No dark mode implementation.
- **Style**: Modern, clean, and premium. Focus on **Glassmorphism**, subtle shadows, and soft gradients.

## STYLING FRAMEWORK
- **Primary**: **Tailwind CSS** (v4.x).
- **Utility First**: All styling must be done using Tailwind classes. Custom CSS is allowed only for complex animations or vendor-specific overrides.

## ICONS & ASSETS
- **Icons**: Only **lucide-react** package.
- **Custom Components**: Custom UI components (buttons, cards, etc.) should be built using Tailwind and Lucide icons.
- **Images**: Use `generate_image` tool for placeholders or specific assets during development.

## COLOR THEME
The application uses a curated, high-end color palette to create a vibrant and professional atmosphere.

| Role | Hex Color | Tailwind Class | Description |
| :--- | :--- | :--- | :--- |
| **Primary** | `#6366F1` | `bg-indigo-500` | Main actions, branding, and active states. |
| **Primary Dark** | `#4F46E5` | `bg-indigo-600` | Hover states and deep accents. |
| **Secondary** | `#EC4899` | `bg-pink-500` | Accent elements, highlights, and "Promote" features. |
| **Background** | `#F8FAFC` | `bg-slate-50` | Page background color. |
| **Surface** | `#FFFFFF` | `bg-white` | Cards, modals, and input fields. |
| **Text Primary** | `#0F172A` | `text-slate-900` | Main headings and body text. |
| **Text Secondary**| `#475569` | `text-slate-600` | Subheadings, labels, and muted text. |
| **Success** | `#10B981` | `text-emerald-500` | Success messages and positive states. |
| **Error** | `#EF4444` | `text-red-500` | Error messages and destructive actions. |
| **Warning** | `#F59E0B` | `text-amber-500` | Alerts and pending states. |
| **Border** | `#E2E8F0` | `border-slate-200` | Subtle dividers and component borders. |

## DESIGN TOKENS
- **Typography**: Primary font: **Inter** or **Outfit** (Sans-serif). Secondary: System defaults.
- **Radius**: Use **Rounded-2xl** (`1rem`) for cards and **Rounded-lg** (`0.5rem`) for buttons/inputs for a soft, premium feel.
- **Shadows**: Use **Shadow-xl** with low opacity for depth.
- **Gradients**: Use linear gradients from `Indigo-500` to `Pink-500` for hero elements.
