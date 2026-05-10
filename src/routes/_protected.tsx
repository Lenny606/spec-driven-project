import { createFileRoute, redirect, Outlet } from '@tanstack/react-router'
import { DashboardLayout } from '#/components/layout/DashboardLayout'

export const Route = createFileRoute('/_protected')({
  beforeLoad: ({ context }) => {
    if (!context.auth.session) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: ProtectedLayout,
})

function ProtectedLayout() {
  const { auth } = Route.useRouteContext()
  
  // Since beforeLoad ensures session exists, user won't be null here
  return (
    <DashboardLayout user={auth.user!}>
      <Outlet />
    </DashboardLayout>
  )
}
