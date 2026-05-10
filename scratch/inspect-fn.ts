import { createServerFn } from '@tanstack/react-start'

const fn = createServerFn({ method: 'POST' })
console.log('Methods on createServerFn result:', Object.keys(fn))
console.log('Prototype methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(fn)))
