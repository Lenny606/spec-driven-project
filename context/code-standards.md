# CODE STANDARDS

## GENERAL PRINCIPLES
- **Readability**: Code must be easy to read and understand. Use descriptive variable and function names.
- **Maintainability**: Follow the DRY (Don't Repeat Yourself) principle. Extract reusable logic into hooks or utility functions.
- **Type Safety**: Leverage TypeScript to its full potential. Avoid `any` at all costs.

## TYPESCRIPT
- **Naming**: Use PascalCase for Interfaces, Types, and Components. Use camelCase for variables and functions.
- **Interfaces vs Types**: Prefer `interface` for object structures that might be extended, and `type` for unions or aliases.
- **Strictness**: Always define return types for functions, especially for complex logic or API calls.

## REACT COMPONENTS
- **Functional Components**: Use arrow functions for component definitions.
- **Hooks**: Use standard hooks (`useState`, `useEffect`, `useMemo`) and custom hooks for logic separation.
- **Props**: Use destructuring for props in the function signature.
- **Composition**: Prefer component composition over large, monolithic components.

## STYLING (TAILWIND CSS)
- **Utility First**: Use Tailwind utility classes for all styling. Avoid custom CSS unless absolutely necessary.
- **Consistency**: Follow a consistent spacing and color system (using Tailwind's default or configured theme).
- **Organization**: Group related Tailwind classes logically (e.g., layout -> spacing -> typography -> interactivity).

## ROUTING (TANSTACK ROUTER)
- **File-Based Routing**: Follow the standard TanStack Router file-based convention in `src/routes`.
- **Type Safety**: Use the generated route types for navigation and parameters.
- **Loaders**: Use `loader` functions for data fetching to ensure data is ready before rendering.

## DATABASE (DRIZZLE + SQLITE)
- **Schemas**: Define all tables in `src/db/schema.ts` with explicit types and relationships.
- **Migrations**: Use Drizzle Kit for managing database migrations.
- **Queries**: Use the Drizzle query builder for type-safe database interactions.

## STATE MANAGEMENT
- **Server State**: Use **TanStack Query** for all asynchronous data fetching and mutations.
- **Client State**: Use **TanStack Store** or React context/state for local UI state.

## FILE STRUCTURE
Follow this directory structure for organized development:
- `context/`: Specification files, workflow rules, and project standards.
- `src/`: Core application source code.
    - `components/`: Reusable React components (UI library, shared parts).
    - `db/`: Database configuration and schema definitions.
        - `schema.ts`: Drizzle table definitions.
        - `index.ts`: Database connection setup.
    - `hooks/`: Custom React hooks for shared logic.
    - `routes/`: File-based routing for TanStack Router.
    - `store/`: Global client-side state management (TanStack Store).
    - `utils/`: Helper functions and formatting utilities.
    - `types/`: Global TypeScript definitions and interfaces.
    - `styles.css`: Global styles and Tailwind imports.
- `public/`: Static assets (images, fonts, etc.).
