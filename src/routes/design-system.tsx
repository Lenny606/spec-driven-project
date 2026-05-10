import { createFileRoute } from '@tanstack/react-router'
import { Button } from '#/components/ui/button'
import { Input, Textarea } from '#/components/ui/input'
import { DateTimePicker } from '#/components/ui/date-time-picker'
import { H1, H2, P, Muted } from '#/components/ui/typography'
import { Feedback } from '#/components/ui/feedback'
import { EventCard } from '#/components/ui/event-card'

export const Route = createFileRoute('/design-system')({
  component: DesignSystemPage,
})

function DesignSystemPage() {
  return (
    <div className="container mx-auto py-12 px-4 space-y-16 bg-slate-50 min-h-screen">
      <section className="space-y-4 text-center">
        <H1>Design System</H1>
        <P className="max-w-2xl mx-auto">
          Core UI components for the Random Event Generator, built with Tailwind CSS, 
          Lucide React, and glassmorphism principles.
        </P>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Buttons */}
        <section className="space-y-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <H2>Buttons</H2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="glass">Glass Button</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="default">Default</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="space-y-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <H2>Inputs & Pickers</H2>
          <div className="space-y-6">
            <Input placeholder="Standard Input" />
            <DateTimePicker label="Event Date & Time" />
            <DateTimePicker variant="glass" label="Glass Date Picker" className="bg-indigo-50/50" />
            <Textarea placeholder="Standard Textarea" />
          </div>
        </section>

        {/* Feedback */}
        <section className="space-y-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <H2>Feedback</H2>
          <div className="space-y-4">
            <Feedback variant="success">
              Action completed successfully!
            </Feedback>
            <Feedback variant="error">
              Something went wrong. Please try again.
            </Feedback>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <H2>Typography</H2>
          <div className="space-y-2">
            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <P>This is a standard paragraph with leading relaxed style.</P>
            <Muted>This is a muted text element for less important info.</Muted>
          </div>
        </section>
      </div>

      {/* Event Card */}
      <section className="space-y-8">
        <H2 className="text-center">Event Card (Premium)</H2>
        <div className="max-w-md mx-auto">
          <EventCard
            title="Premium Midnight Jazz Session"
            date="Friday, May 24, 2024 • 20:00"
            location="The Blue Note, Prague"
            description="Experience an exclusive night of smooth jazz with international artists. Limited seating available for this premium event."
            image="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop"
            actionLabel="Book Now"
            secondaryActionLabel="Promote"
          />
        </div>
      </section>
    </div>
  )
}
