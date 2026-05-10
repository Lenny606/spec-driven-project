import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../components/auth/login-form'

export const Route = createFileRoute('/login')({
  component: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <LoginForm />
    </div>
  ),
})
