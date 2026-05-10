# FEATURE: USER DASHBOARD (AUTHENTICATED)

## OVERVIEW
The User Dashboard is a restricted area accessible only to logged-in users. It serves as the primary management hub for event organizers. The design remains premium and minimalist, maintaining consistency with the global design system (glassmorphism, high-end typography).

## TARGET AUDIENCE
- **Authenticated Users**: Registered members who want to manage their profile or create new events.
- **Organizers**: Users who actively promote and list events on the platform.

---

## 1. TOP NAVIGATION BAR
A specialized version of the navigation bar for authenticated users.

- **Logo**: `RandomEvent` (Indigo-500, font-black).
- **User Information**:
    - **Location**: Right corner.
    - **Content**: Display name or email of the logged-in user.
    - **Avatar**: Simple placeholder/circle with user's initials.
- **Actions**:
    - **Logout Button**: High-end ghost style or minimalist icon button (e.g., `LogOut` icon from Lucide).
- **Behavior**: Sticky, backdrop blur, matching the home page style.

---

## 2. SIDEBAR NAVIGATION
A clean, vertical navigation sidebar on the left side of the dashboard.

- **Primary Action**: **"Create Event"** button.
    - Style: Primary (Indigo-500).
    - Icon: `PlusCircle` or `CalendarPlus`.
    - Visibility: Fixed at the top or prominent in the sidebar menu.
- **Secondary Links** (Placeholders for now):
    - **My Events**: Link to the user's created events list.
    - **Settings**: Link to profile settings.
- **Styling**: `border-r border-slate-200/50` or a subtle glassmorphism panel.

---

## 3. MAIN CONTENT AREA
The central zone where specific dashboard content will be rendered.

- **Placeholder**: For now, it will simply display a "Welcome to your dashboard" message or the user's name.
- **Layout**: Flexible container that respects the sidebar's width.

---

## TECHNICAL SPECIFICATIONS
- **Route**: `/dashboard` (or `(authenticated)/dashboard`).
- **Route Protection**:
    - **MANDATORY**: Unauthorized access must redirect to `/login`.
    - Implementation via middleware or route guard (Better Auth `authMiddleware` or similar).
- **Styling**: Strictly **Tailwind CSS v4**.
- **Icons**: `lucide-react`.
- **Typography**: `Inter` (Body), `Outfit` (Headings).
- **Responsiveness**: The sidebar should collapse or hide on mobile, replaced by a drawer or mobile-friendly navigation.

---

## IMPLEMENTATION NOTES
- No complex logic (event creation forms, lists) should be implemented at this stage.
- The primary focus is on the structural layout (TopNav + Sidebar) and ensuring the route is protected.
