import { Hono } from 'hono'

export const app = new Hono<{ Bindings: CloudflareBindings }>().basePath('/api')

app.get('/', async (c) => {
	return c.text('ok')
})

export default app
