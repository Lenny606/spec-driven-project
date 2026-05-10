# FEATURE: HOME PAGE (UNAUTHENTICATED)

## OVERVIEW
The home page is the primary entry point for all visitors. It serves as a landing page that demonstrates the app's core value proposition: **instant event discovery**. The design must feel high-end, using glassmorphism, soft gradients, and high-impact typography to create a "premium" first impression.

## TARGET AUDIENCE
- **Guest Visitors**: Users who want to find something to do immediately without creating an account.
- **Prospective Organizers**: Users looking to promote their own events.

---

## 1. NAVIGATION BAR (STICKY)
A minimalist, high-end navigation bar with a backdrop blur.

- **Logo**: `RandomEvent` (Indigo-500, font-black).
- **Navigation Links**:
    - **How it Works**: Anchor link to the features section.
    - **Discovery**: Link to the random event generator.
- **Action Buttons**:
    - **Login**: Ghost style (Border-indigo-500).
    - **Get Started**: Primary style (Indigo-500).
- **Behavior**: Sticky at the top, `bg-white/70 backdrop-blur-md` on scroll.

---

## 2. HERO SECTION (THE CORE HOOK)
A visually stunning section designed to capture attention and drive interaction.

- **Background**: Soft mesh gradient blending `Indigo-500` and `Pink-500` at the edges.
- **Headline**: `text-5xl md:text-7xl font-black text-slate-900 leading-tight`
    - "Discover Your Next Adventure, **Randomly.**"
- **Sub-headline**: `text-xl text-slate-600 max-w-2xl mx-auto mb-8`
    - "Find hidden gems and exciting events near you. One click, one random discovery, infinite possibilities."
- **Primary CTA**: **"Generate Random Event"**
    - Large, premium button with `LucideSparkles` icon.
    - Hover effect: Scale 105% + subtle glow.
    - Action: Triggers the "Randomizer Engine".

---

## 3. RANDOMIZER ENGINE (MODAL DISCOVERY)
When the "Generate" button is clicked, instead of a page navigation, the event is revealed via a premium modal.

- **Logic**:
    - Trigger a server function `getRandomEvent()`.
    - Show a high-end "shuffling" skeleton or animation for 800ms.
- **Result Overlay**:
    - **Backdrop**: `bg-slate-900/40 backdrop-blur-xl`.
    - **Event Card**: The premium `EventCard` component (see `01-design-system.md`).
    - **Actions inside Modal**:
        - `Try Another One`: Regenerates a new random event.
        - `Close`: Exits the discovery flow.

---

## 4. "HOW IT WORKS" SECTION
A clean three-column layout explaining the simplicity of the platform.

- **Step 1: Click**: Hit the randomizer to see what's happening.
- **Step 2: Explore**: See date, location, and event details.
- **Step 3: Organise**: Create your own account to promote events.
- **Visuals**: Use subtle glassmorphism containers for each step.

---

## 5. FOOTER
A simple, professional footer.

- **Links**: Privacy Policy, Terms of Service, Contact.
- **Copyright**: © 2026 Random Event Generator.
- **Branding**: Muted version of the logo.

---

## TECHNICAL SPECIFICATIONS
- **Route**: `/` (`src/routes/index.tsx`).
- **Styling**: Strictly **Tailwind CSS v4**.
- **Icons**: `lucide-react`.
- **Typography**: `Inter` (Body), `Outfit` (Headings).
- **Animations**: Tailwind transitions for hover states; CSS `@keyframes` for the "shuffling" effect.
- **Responsiveness**: Mobile-first design. Hero text should scale down for small screens.
