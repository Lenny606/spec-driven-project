import { createFileRoute, Link } from '@tanstack/react-router'
import { getMyEvents } from '#/server/event-actions'
import { EventCard } from '#/components/ui/event-card'
import { PlusCircle, ArrowUpRight, Calendar, Users, Eye, Loader2 } from 'lucide-react'

export const Route = createFileRoute('/_protected/dashboard/')({
  loader: async () => await getMyEvents(),
  component: MyEventsPage,
  pendingComponent: () => (
    <div className="flex items-center justify-center min-h-[400px]">
      <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
    </div>
  ),
})

function MyEventsPage() {
  const events = Route.useLoaderData()
  const { auth } = Route.useRouteContext()

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Moje eventy
          </h1>
          <p className="text-slate-500 mt-2">
            Vítejte zpět, {auth.user?.name.split(' ')[0]}! Zde je přehled vašich událostí.
          </p>
        </div>
        <Link to="/dashboard/create">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 transition-all flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />
            Vytvořit event
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Aktivní eventy" 
          value={events.length.toString()} 
          icon={<Calendar className="w-5 h-5 text-indigo-500" />}
          trend="+0 % od minule" 
        />
        <StatCard 
          title="Celkem zobrazení" 
          value="0" 
          icon={<Eye className="w-5 h-5 text-emerald-500" />}
          trend="+0 % od minule" 
        />
        <StatCard 
          title="Zájemci" 
          value="0" 
          icon={<Users className="w-5 h-5 text-amber-500" />}
          trend="+0 % od minule" 
        />
      </div>

      <div>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                date={new Date(event.date).toLocaleString('cs-CZ', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                location={event.location}
                image={event.imageUrl || undefined}
                isPromoted={!!event.isPromoted}
                actionLabel="Upravit event"
                secondaryActionLabel="Detail"
              />
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 rounded-3xl border-dashed border-2 border-slate-200 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <span className="text-3xl">🗓️</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Zatím žádné události</h3>
            <p className="text-slate-500 max-w-sm mb-8">
              Zatím jste nevytvořili žádné události. Jste připraveni oslovit širší publikum?
            </p>
            <Link to="/dashboard/create">
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                Vytvořit první událost
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ title, value, icon, trend }: { title: string, value: string, icon: React.ReactNode, trend: string }) {
  return (
    <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {icon}
      </div>
      <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-black text-slate-900 mb-2">{value}</h3>
      </div>
      <p className="text-xs text-slate-400 font-medium">{trend}</p>
    </div>
  )
}
