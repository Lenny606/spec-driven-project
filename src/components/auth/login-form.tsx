import * as React from 'react'
import { authClient } from '../../lib/auth-client'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Typography } from '../ui/typography'
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
      setError(error.message || 'Login failed')
      setLoading(false)
    } else {
      navigate({ to: '/' })
    }
  }

  return (
    <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
      <Typography variant="h2" className="mb-6 text-center">Login</Typography>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Typography variant="small" className="mb-1 block">Email</Typography>
          <Input
            type="email"
            placeholder="organizer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Typography variant="small" className="mb-1 block">Password</Typography>
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <Typography variant="small" className="text-red-500 text-center">{error}</Typography>
        )}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Typography variant="small" className="text-slate-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-400 hover:underline">
            Register here
          </Link>
        </Typography>
      </div>
    </div>
  )
}
