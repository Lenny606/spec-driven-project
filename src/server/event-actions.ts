import { createServerFn } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'
import { auth } from '../lib/auth'
import { db } from '../db'
import { events } from '../db/schema/events'
import { eq, desc } from 'drizzle-orm'
import { z } from 'zod'

const createEventSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().min(1, 'Description is required'),
  date: z.string().transform((val) => new Date(val)),
  location: z.string().min(1, 'Location is required'),
  imageUrl: z.string().url().optional().or(z.literal('')),
  isPromoted: z.boolean().default(false),
})

export const createEvent = createServerFn({ method: 'POST' })
  .inputValidator(createEventSchema)
  .handler(async ({ data }) => {
    const request = getRequest()
    if (!request) throw new Error('No request found')

    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session) {
      throw new Error('Unauthorized')
    }

    const newEvent = await db.insert(events).values({
      ...data,
      organizerId: session.user.id,
      date: data.date,
    }).returning()

    return newEvent[0]
  })

export const getMyEvents = createServerFn({ method: 'GET' })
  .handler(async () => {
    const request = getRequest()
    if (!request) throw new Error('No request found')

    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session) {
      throw new Error('Unauthorized')
    }

    const userEvents = await db.query.events.findMany({
      where: eq(events.organizerId, session.user.id),
      orderBy: [desc(events.date)],
    })

    return userEvents
  })
