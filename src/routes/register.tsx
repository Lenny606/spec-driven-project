import { createFileRoute } from '@tanstack/react-router'
import { RegisterForm } from '../components/auth/register-form'

export const Route = createFileRoute('/register')({
  component: () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <RegisterForm />
    </div>
  ),
})
