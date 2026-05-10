# ARCHITECTURE CONTEXT

## OVERVIEW
The application is built using a modern, full-stack architecture powered by the **TanStack** ecosystem. It leverages server-side rendering (SSR), type-safe routing, and a local persistent database.

## LAYERS & TECH STACK

### 1. Frontend Layer (UI/UX)
- **Framework**: **TanStack Start** (Built on React 19).
- **Routing**: **TanStack Router** (File-based, strictly typed routing).
- **Styling**: **Tailwind CSS** (v4.x).
- **Icons**: **Lucide React**.
- **State Management**: 
    - **Server State**: **TanStack Query** (Caching, fetching, synchronization).
    - **Client State**: **TanStack Store** (Global UI state).

### 2. Backend Layer (Server-Side)
- **Runtime**: **Nitro** (Embedded in TanStack Start).
- **Communication**: **Server Functions** for seamless client-to-server logic.
- **API**: Standard **API Routes** for external or specialized integrations.
- **Validation**: **Zod** for schema validation and type safety across boundaries.

### 3. Database Layer (Persistence)
- **Database**: **SQLite** (Local file-based storage).
- **ORM**: **Drizzle ORM** (Type-safe SQL query builder).
- **Migrations**: **Drizzle Kit** for schema management and synchronization.

### 4. AI Layer (Intelligent Features)
- **Framework**: **TanStack AI**.
- **Providers**: Configurable via environment variables (Anthropic/Claude as primary).

### 5. Development & Testing
- **Package Manager**: **NPM** (standard).
- **Bundler**: **Vite**.
- **Testing**: **Vitest** (Unit and integration testing).
- **Dev Tools**: TanStack Router Devtools, React Query Devtools.

## DATA FLOW
1.  **Request**: User navigates to a route or triggers an action.
2.  **Routing/Loading**: TanStack Router handles the request, executes loaders, and fetches data via TanStack Query.
3.  **Server Interaction**: TanStack Query calls **Server Functions** when database access or secure logic is needed.
4.  **Database Access**: Server Functions use **Drizzle ORM** to interact with the **SQLite** database.
5.  **Rendering**: The UI is rendered with React, utilizing the fetched data and local state.
6.  **Response**: The final HTML/JS is served to the client with hydrated state.

## SECURITY & STANDARDS
- **Environment Variables**: Managed via `.env` files (Never commit secrets).
- **Type Safety**: End-to-end type safety from the database schema to the UI components.
- **Validation**: Strict Zod validation on all user inputs and API responses.
