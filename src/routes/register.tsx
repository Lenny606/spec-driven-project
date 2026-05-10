import { createFileRoute, redirect } from '@tanstack/react-router'
import { RegisterForm } from '../components/auth/register-form'
import { Navbar } from '#/components/layout/Navbar'
import { createServerFn } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'
import { auth } from '../lib/auth'

const getSession = createServerFn({ method: 'GET' }).handler(async () => {
  const request = getRequest()
  if (!request) return null
  return await auth.api.getSession({
    headers: request.headers,
  })
})

export const Route = createFileRoute('/register')({
  beforeLoad: async () => {
    const session = await getSession()
    if (session) {
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
