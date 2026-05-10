import * as React from 'react'
import { authClient } from '../../lib/auth-client'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { H2, Muted } from '../ui/typography'
import { useNavigate, Link } from '@tanstack/react-router'

export function LoginForm() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await authClient.signIn.email({
      email,
      password,
    })

    if (error) {
      // Detailed error mapping based on Better Auth error codes
      const message = error.code === 'INVALID_EMAIL_OR_PASSWORD' 
        ? 'Invalid email or password. Please try again.'
        : error.message || 'Login failed. Please try again later.'
      
      setError(message)
      setLoading(false)
    } else {
      // Redirect to dashboard on success
      navigate({ to: '/dashboard' })
    }
  }

  return (
    <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
      <H2 className="mb-6 text-center text-white">Login</H2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Muted className="mb-1 block text-slate-200">Email</Muted>
          <Input
            type="email"
            placeholder="organizer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div>
          <Muted className="mb-1 block text-slate-200">Password</Muted>
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />
        </div>
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
            <Muted className="text-red-400">{error}</Muted>
          </div>
        )}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Muted className="text-slate-300">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-300 hover:underline">
            Register here
          </Link>
        </Muted>
      </div>
    </div>
  )
}
