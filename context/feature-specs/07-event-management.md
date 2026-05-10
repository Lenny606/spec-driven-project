# FEATURE SPEC: EVENT MANAGEMENT
Read Gemini.md file for the rules.

## OVERVIEW
This document defines the process for an authenticated user (organizer) to manage their events, including creating new listings and viewing their own existing events.

## 1. SIDEBAR NAVIGATION (UPDATED)
The dashboard sidebar will include two primary actions for event management to ensure clear separation of concerns:
- **"Vytvořit event"**: Navigates to `/dashboard/create`.
- **"Moje eventy"**: Navigates to `/dashboard` (which will serve as the list view). 
- **Requirement**: The sidebar must clearly indicate when "Moje eventy" is active.

## 2. DATA PRIVACY & FILTERING
> [!IMPORTANT]
> Security and data privacy are paramount. The dashboard MUST NOT display events from other organizers.
- All data fetching for the dashboard list must use the `organizer_id` from the authenticated session.
- Client-side filtering is NOT sufficient; the server function `getMyEvents` must enforce this at the database query level.

## 2. CREATE EVENT FLOW
The creation flow is accessible via `/dashboard/create`.

### A. Form Fields
- **Title** (Required): Text input. Max 100 characters.
- **Description** (Required): Textarea. Support for multi-line text.
- **Date & Time** (Required): Date/time picker. Must be in the future.
- **Location** (Required): Text input. Venue name or address.
- **Image URL** (Optional): Text input for external image link.
- **Promote Checkbox**: Option to mark as promoted (Boolean).

### B. Functional Logic
1. **Validation**: Execute client-side validation using the Zod schema.
2. **Server Function**: Call `createEvent` server function.
3. **Auth Check**: Ensure the session is valid and retrieve `userId`.
4. **DB Operation**: Insert the new record into the `events` table with `organizer_id` set to the current user.
5. **Success**: Redirect the user back to the "My Events" list.

## 3. MY EVENTS LIST
This section displays a list of events created ONLY by the currently authenticated user.

### A. Data Fetching
- **Server Function**: `getMyEvents`
- **Logic**: 
    - Retrieve the current user's session.
    - Query the `events` table where `organizer_id` matches the session's `userId`.
    - Order by `date` (descending or ascending based on future/past).

### B. UI Elements
- **List Layout**: A vertical list or grid of compact event cards.
- **Empty State**: If no events are found, display: "Zatím jste nevytvořili žádné události. [Vytvořit první událost]".
- **Card Content**: Title, Date, Location, and a "Promoted" badge if applicable.

## 4. TECHNICAL REQUIREMENTS
- **Routes**:
    - `src/routes/_protected/create.tsx` (Creation form)
    - `src/routes/_protected/dashboard.tsx` (User's event list)
- **Server Functions**:
    - `createEvent(data)`
    - `getMyEvents()`
- **Database**: Drizzle ORM queries using `eq(events.organizer_id, userId)`.

## 5. SUCCESS CRITERIA
- User can see a list of their own events only.
- Created events appear immediately in the list after redirection.
- Unauthorized users cannot access either the list or the creation form.
