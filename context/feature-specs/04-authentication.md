# FEATURE SPEC: AUTHENTICATION
READ GEMINI.md and related context files before implementing the design system.

## OVERVIEW
Secure and seamless authentication system for event organizers. This system allows users to create accounts, log in to manage their events, and maintain secure sessions using a modern full-stack approach.

## GOALS
- Implement a secure, session-based authentication system.
- Provide a premium user experience for registration and login.
- Ensure type-safe access control across all routes and server functions.
- Leverage the integration between TanStack Start and Better Auth.

## USER STORIES
- **As a New Organizer**, I want to register with my email and password so I can start creating events.
- **As a Registered User**, I want to log in securely so I can access my dashboard.
- **As a Logged-in User**, I want to log out easily to protect my account on shared devices.
- **As a Visitor**, I want to be redirected to the home page if I try to access protected management features.

## TECHNICAL STRATEGY
- **Library**: [Better Auth](https://www.better-auth.com/) with `tanstack-start` plugin.
- **Strategy**: **Server-Side Sessions** stored in the database.
- **Storage**: HttpOnly, Secure, SameSite=Lax cookies for session management.
- **ORM Integration**: Drizzle Adapter for Better Auth.
- **Validation**: Zod for form validation (client and server).

## DATABASE UPDATES
The `database-model.md` needs to be extended to support Better Auth standard tables:

### 1. `users` (Update)
| Column | Type | Constraints |
| :--- | :--- | :--- |
| `id` | `text` | Primary Key |
| `name` | `text` | Not Null |
| `email` | `text` | Unique, Not Null |
| `email_verified`| `integer` | Boolean (0/1) |
| `image` | `text` | Optional |
| `created_at` | `integer` | Default `Date.now()` |
| `updated_at` | `integer` | Default `Date.now()` |

### 2. `sessions` (New)
| Column | Type | Constraints |
| :--- | :--- | :--- |
| `id` | `text` | Primary Key |
| `user_id` | `text` | Foreign Key (`users.id`) |
| `token` | `text` | Not Null |
| `expires_at` | `integer` | Not Null |
| `ip_address` | `text` | Optional |
| `user_agent` | `text` | Optional |

### 3. `accounts` (New - for future OAuth)
| Column | Type | Constraints |
| :--- | :--- | :--- |
| `id` | `text` | Primary Key |
| `user_id` | `text` | Foreign Key (`users.id`) |
| `account_id` | `text` | Not Null |
| `provider_id` | `text` | Not Null |
| `access_token` | `text` | Optional |
| `refresh_token` | `text` | Optional |

### 4. `verifications` (New)
| Column | Type | Constraints |
| :--- | :--- | :--- |
| `id` | `text` | Primary Key |
| `identifier` | `text` | Not Null |
| `value` | `text` | Not Null |
| `expires_at` | `integer` | Not Null |

## UI & UX DESIGN
- **Visual Style**: Clean, centered glassmorphism cards.
- **Feedback**: Real-time validation messages and loading states for buttons.
- **Transitions**: Smooth fade-in for form transitions (Login <-> Register).
- **Protected Routes**: Use TanStack Router `beforeLoad` hook for "Flash-free" redirects.

## IMPLEMENTATION STEPS
1.  **Dependency Setup**: Install `better-auth`.
2.  **Auth Configuration**: Initialize Better Auth in `src/lib/auth.ts` with Drizzle adapter.
3.  **API Handler**: Mount the auth handler in `src/routes/api/auth/$.ts`.
4.  **Middleware**: Create `authMiddleware` for Server Functions.
5.  **Route Protection**: Implement `_protected` layout route.
6.  **UI Components**: Build `LoginForm` and `RegisterForm` in `src/components/auth/`.
