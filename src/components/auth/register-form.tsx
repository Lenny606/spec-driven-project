import * as React from 'react'
import { authClient } from '../../lib/auth-client'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { H2, Muted } from '../ui/typography'
import { useNavigate, Link } from '@tanstack/react-router'

export function RegisterForm() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await authClient.signUp.email({
      email,
      password,
      name,
    })

    if (error) {
      const message = error.code === 'USER_ALREADY_EXISTS'
        ? 'An account with this email already exists.'
        : error.message || 'Registration failed. Please try again.'
      
      setError(message)
      setLoading(false)
    } else {
      // Redirect to dashboard on success
      navigate({ to: '/dashboard' })
    }
  }

  return (
    <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl">
      <H2 className="mb-6 text-center text-white">Register</H2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <Muted className="mb-1 block text-slate-200">Full Name</Muted>
          <Input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            required
          />
        </div>
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
          {loading ? 'Registering...' : 'Register'}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Muted className="text-slate-300">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-300 hover:underline">
            Login here
          </Link>
        </Muted>
      </div>
    </div>
  )
}
