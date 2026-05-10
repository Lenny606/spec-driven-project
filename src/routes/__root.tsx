import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
  ErrorComponent,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { createServerFn } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'
import { auth } from '../lib/auth'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

const getSession = createServerFn({ method: 'GET' }).handler(async () => {
  const request = getRequest()
  if (!request) return null
  return await auth.api.getSession({
    headers: request.headers,
  })
})

interface MyRouterContext {
  queryClient: QueryClient
  auth: {
    user: {
      id: string
      email: string
      name: string
      image?: string | null
    } | null
    session: any | null
  }
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    const session = await getSession()
    return {
      auth: {
        user: session?.user ?? null,
        session: session?.session ?? null,
      },
    }
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Random Event Generator | Premium Event Platform',
      },
      {
        name: 'description',
        content: 'Discover and create amazing random events in your city.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootDocument,
  errorComponent: (props) => {
    return (
      <RootDocument>
        <div className="p-8">
          <ErrorComponent {...props} />
        </div>
      </RootDocument>
    )
  },
})

function RootDocument({ children }: { children?: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="flex min-h-screen flex-col bg-slate-50">
          {children || <Outlet />}
        </div>
        <ScrollRestoration />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
