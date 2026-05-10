import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  const { session } = Route.useRouteContext()

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Welcome back, {session.user.name.split(' ')[0]}! 👋
        </h1>
        <p className="text-slate-500 mt-2">
          Here's what's happening with your events and listings today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Active Events" value="0" trend="0% from last month" />
        <StatCard title="Total Views" value="0" trend="0% from last month" />
        <StatCard title="Pending Approvals" value="0" trend="-" />
      </div>

      <div className="glass-card p-12 rounded-3xl border-dashed border-2 border-slate-200 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
          <span className="text-3xl">🗓️</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">No events created yet</h2>
        <p className="text-slate-500 max-w-sm mb-8">
          Ready to reach a wider audience? Start by creating your first event listing.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 transition-all">
          Create Your First Event
        </button>
      </div>
    </div>
  )
}

function StatCard({ title, value, trend }: { title: string, value: string, trend: string }) {
  return (
    <div className="glass-card p-6 rounded-2xl">
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <h3 className="text-3xl font-black text-slate-900 mb-2">{value}</h3>
      <p className="text-xs text-slate-400">{trend}</p>
    </div>
  )
}
