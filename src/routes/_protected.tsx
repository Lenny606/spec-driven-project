import { createFileRoute, redirect, Outlet } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'
import { auth } from '../lib/auth'
import { DashboardLayout } from '#/components/layout/DashboardLayout'

const getSession = createServerFn({ method: 'GET' }).handler(async () => {
  const request = getRequest()
  if (!request) return null
  return await auth.api.getSession({
    headers: request.headers,
  })
})

export const Route = createFileRoute('/_protected')({
  beforeLoad: async () => {
    const session = await getSession()
    if (!session) {
      throw redirect({
        to: '/login',
      })
    }
    return {
      session,
    }
  },
  component: ProtectedLayout,
})

function ProtectedLayout() {
  const { session } = Route.useRouteContext()
  
  return (
    <DashboardLayout user={session.user}>
      <Outlet />
    </DashboardLayout>
  )
}
