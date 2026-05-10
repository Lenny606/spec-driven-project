import { createFileRoute, redirect, Outlet } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { getWebRequest } from '@tanstack/start/server'
import { auth } from '../lib/auth'

const getSession = createServerFn({ method: 'GET' }).handler(async () => {
  const request = getWebRequest()
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
  component: () => <Outlet />,
})
