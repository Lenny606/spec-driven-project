import { createFileRoute, redirect } from '@tanstack/react-router'
import { LoginForm } from '../components/auth/login-form'
import { Navbar } from '#/components/layout/Navbar'

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    if (context.auth.session) {
      throw redirect({
        to: '/dashboard',
      })
    }
  },
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-slate-50 p-4">
        <LoginForm />
      </div>
    </div>
  ),
})
