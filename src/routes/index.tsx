import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Sparkles, MousePointer2, Compass, Rocket, X } from 'lucide-react'
import { Button } from '#/components/ui/button'
import { EventCard } from '#/components/ui/event-card'
import { cn } from '#/lib/utils'
import { Navbar } from '#/components/layout/Navbar'
import { Footer } from '#/components/layout/Footer'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsModalOpen(true)
    setIsGenerating(true)
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false)
    }, 1200)
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 -z-10 mesh-gradient opacity-20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

          <div className="container px-4 mx-auto text-center z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full animate-bounce-slow">
              <Sparkles className="w-4 h-4" />
              <span>New: 50+ Events Added This Week</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Discover Your Next Adventure, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
                Randomly.
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Find hidden gems and exciting events near you. One click, one random discovery, infinite possibilities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="text-lg px-10 h-16 shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all duration-300"
                onClick={handleGenerate}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Random Event
              </Button>
              <Button variant="ghost" size="lg" className="h-16 px-10 border-slate-200 text-slate-600 hover:bg-slate-50">
                Browse All Events
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-slate-50/50">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it Works</h2>
              <p className="text-slate-600 text-lg">Discovery made simple. Three steps to your next great experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard 
                icon={<MousePointer2 className="w-8 h-8 text-indigo-500" />}
                title="Click"
                description="Hit the randomizer to see what's happening around you right now."
                step="01"
              />
              <StepCard 
                icon={<Compass className="w-8 h-8 text-pink-500" />}
                title="Explore"
                description="See date, location, and deep details about the event we found for you."
                step="02"
              />
              <StepCard 
                icon={<Rocket className="w-8 h-8 text-purple-500" />}
                title="Organize"
                description="Create your own account to promote events and manage your listings."
                step="03"
              />
            </div>
          </div>
        </section>

        {/* Randomizer Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl animate-in fade-in duration-300" 
              onClick={() => setIsModalOpen(false)}
            />
            
            <div className="relative w-full max-w-lg animate-in zoom-in-95 fade-in duration-300">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {isGenerating ? (
                <div className="glass-card p-12 rounded-2xl flex flex-col items-center justify-center gap-6 min-h-[400px]">
                  <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Shuffling Events...</h3>
                    <p className="text-slate-500">Finding something special for you.</p>
                  </div>
                  <div className="flex gap-2">
                     {[1,2,3].map(i => (
                       <div key={i} className={cn("w-3 h-3 rounded-full bg-indigo-400 animate-bounce", i === 2 && "animation-delay-200", i === 3 && "animation-delay-400")} />
                     ))}
                  </div>
                </div>
              ) : (
                <EventCard 
                  title="Prague Night Jazz Festival"
                  date="May 24, 2026 • 20:00"
                  location="Jazz Dock, Prague"
                  description="Experience the soul of Prague through its vibrant jazz scene. Featuring world-class musicians in an intimate riverside setting."
                  image="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=800"
                  actionLabel="I'm Interested"
                  secondaryActionLabel="Try Another One"
                  onSecondaryAction={() => {
                    setIsGenerating(true)
                    setTimeout(() => setIsGenerating(false), 800)
                  }}
                  className="w-full"
                />
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

function StepCard({ icon, title, description, step }: { icon: React.ReactNode, title: string, description: string, step: string }) {
  return (
    <div className="glass-card p-8 rounded-2xl relative group hover:border-indigo-500/30 transition-all duration-300">
      <div className="absolute top-6 right-8 text-4xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">
        {step}
      </div>
      <div className="mb-6 p-4 bg-white rounded-xl w-fit shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  )
}
