import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { DateTimePicker } from '#/components/ui/date-time-picker'
import { PlusCircle, Image as ImageIcon, MapPin, Type, AlignLeft, Sparkles } from 'lucide-react'
import { createEvent } from '#/server/event-actions'

const eventSchema = z.object({
  title: z.string().min(3, 'Název musí mít alespoň 3 znaky').max(100),
  description: z.string().min(10, 'Popis musí mít alespoň 10 znaků'),
  date: z.string().refine((val) => new Date(val) > new Date(), {
    message: 'Datum musí být v budoucnosti',
  }),
  location: z.string().min(3, 'Lokalita je povinná'),
  imageUrl: z.string().url('Neplatná URL obrázku').optional().or(z.literal('')),
  isPromoted: z.boolean().default(false),
})

type EventFormValues = z.infer<typeof eventSchema>

export const Route = createFileRoute('/_protected/dashboard/create')({
  component: CreateEventPage,
})

function CreateEventPage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      isPromoted: false,
    },
  })

  const onSubmit = async (values: EventFormValues) => {
    setIsSubmitting(true)
    setError(null)
    try {
      // Call createEvent directly with values as it matches the validator schema
      await createEvent(values)
      navigate({ to: '/dashboard' })
    } catch (err) {
      console.error(err)
      setError('Nepodařilo se vytvořit událost. Zkuste to prosím znovu.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Vytvořit novou událost
        </h1>
        <p className="text-slate-500 mt-2">
          Vyplňte podrobnosti o vaší události a oslovte své publikum.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="glass-card p-8 rounded-3xl space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Type className="w-4 h-4 text-indigo-500" />
              Název události
            </label>
            <Input
              {...register('title')}
              placeholder="Např. Jazzový večer v parku"
              variant="glass"
              className={errors.title ? 'border-red-500 focus:ring-red-500' : ''}
            />
            {errors.title && (
              <p className="text-xs text-red-500 font-medium">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <AlignLeft className="w-4 h-4 text-indigo-500" />
              Popis
            </label>
            <textarea
              {...register('description')}
              placeholder="Popište, na co se mohou návštěvníci těšit..."
              className="w-full min-h-[150px] bg-white/50 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
            />
            {errors.description && (
              <p className="text-xs text-red-500 font-medium">{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date */}
            <DateTimePicker
              {...register('date')}
              label="Datum a čas"
              variant="glass"
              className={errors.date ? 'border-red-500 focus:ring-red-500' : ''}
            />
            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-500" />
                Lokalita
              </label>
              <Input
                {...register('location')}
                placeholder="Název místa nebo adresa"
                variant="glass"
                className={errors.location ? 'border-red-500 focus:ring-red-500' : ''}
              />
              {errors.location && (
                <p className="text-xs text-red-500 font-medium">{errors.location.message}</p>
              )}
            </div>
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-indigo-500" />
              URL obrázku (volitelné)
            </label>
            <Input
              {...register('imageUrl')}
              placeholder="https://example.com/poster.jpg"
              variant="glass"
            />
            {errors.imageUrl && (
              <p className="text-xs text-red-500 font-medium">{errors.imageUrl.message}</p>
            )}
          </div>

          {/* Promote Checkbox */}
          <div className="flex items-center gap-3 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
            <input
              type="checkbox"
              id="isPromoted"
              {...register('isPromoted')}
              className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
            />
            <label htmlFor="isPromoted" className="flex items-center gap-2 cursor-pointer select-none">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-bold text-slate-900">Promovat tuto událost</span>
              <span className="text-xs text-slate-500 font-normal">(Zvýší viditelnost na hlavní stránce)</span>
            </label>
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100 animate-in fade-in zoom-in duration-300">
            {error}
          </div>
        )}

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate({ to: '/dashboard' })}
            disabled={isSubmitting}
          >
            Zrušit
          </Button>
          <Button
            type="submit"
            className="px-12 h-14 rounded-2xl font-black text-lg shadow-xl shadow-indigo-500/20"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Vytvářím...' : 'Vytvořit událost'}
          </Button>
        </div>
      </form>
    </div>
  )
}
