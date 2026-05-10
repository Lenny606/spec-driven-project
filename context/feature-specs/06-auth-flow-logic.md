# FEATURE SPEC: AUTH FLOW LOGIC
Read Gemini.md file for the rules.

## OVERVIEW
This document defines the functional logic for the authentication flow, including state management, error handling, and redirection behavior for Login and Logout processes.

## 1. LOGIN FLOW
The login process must be secure, responsive, and provide clear feedback to the user.

### A. Submission States
- **Idle**: The initial state where the form is ready for input.
- **Submitting**: Triggered when the user clicks "Login". 
    - Disable the submit button and inputs.
    - Show a loading spinner or "Logging in..." label.
- **Success**: Session is successfully created.
    - Clear form data.
    - Execute an immediate redirect to `/dashboard`.
- **Error**: Authentication fails.
    - Re-enable the form.
    - Display a specific error message (see below).

### B. Error Handling
The UI must interpret Better Auth error codes and display user-friendly messages:
- **`INVALID_EMAIL_OR_PASSWORD`**: "Invalid email or password. Please try again."
- **`USER_NOT_FOUND`**: "No account found with this email." (Optional, can be merged with invalid credentials for security).
- **`NETWORK_ERROR`**: "Connection failed. Please check your internet."
- **Generic**: "An unexpected error occurred. Please try again later."

### C. Redirection Logic
- **Target**: `/dashboard` (unless a `redirect` query parameter is present).
- **Post-Login Refresh**: Ensure TanStack Query and TanStack Router state are updated to reflect the new authenticated session.

## 2. LOGOUT FLOW
Logout should be fast and ensure all sensitive data is cleared from the client.

### A. Execution
1.  **Trigger**: User clicks "Logout" in the Dashboard Nav.
2.  **API Call**: Invoke `authClient.signOut()`.
3.  **Local Cleanup**:
    - Clear any cached user data in TanStack Query.
    - Reset TanStack Store (if used for auth state).
4.  **Redirection**: Immediately redirect the user to the Home Page (`/`).

### B. Feedback
- Optional: Show a "Successfully logged out" toast or message if using a feedback system.

## 3. SESSION SYNCHRONIZATION
- **Auto-Redirect**: If an authenticated user tries to access `/login` or `/register`, they should be automatically redirected to `/dashboard`.
- **Stale Sessions**: If a session expires while the user is on the dashboard, the next route transition (via `beforeLoad`) or Server Function call (via `authMiddleware`) must trigger a redirect to `/login`.

## TECHNICAL REQUIREMENTS
- **Router**: TanStack Router `useNavigate` and `redirect`.
- **Auth Client**: `better-auth/client`.
- **Feedback**: UI components from `src/components/ui/feedback.tsx` (if implemented) or simple inline error messages.
