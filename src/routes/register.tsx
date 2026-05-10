import { createFileRoute, redirect } from '@tanstack/react-router'
import { RegisterForm } from '../components/auth/register-form'
import { Navbar } from '#/components/layout/Navbar'

export const Route = createFileRoute('/register')({
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
        <RegisterForm />
      </div>
    </div>
  ),
})
