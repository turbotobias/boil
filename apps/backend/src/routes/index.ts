import { Hono } from 'hono'
import { showRoutes } from 'hono/dev'
import { hono_zero_sync } from './zero-sync'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'

const hono_root = new Hono<{ Bindings: CloudflareBindings }>()
	.get('/', (c) => c.json({ result: 'GET / 👌' }))
	.post('/', (c) => c.json({ result: 'POST / 👌' }, 201))
	.get('/:id', (c) => c.json({ result: `GET /${c.req.param('id')} 👌` }))

export const app = new Hono()
	.basePath('/v1')
	.use(logger())
	.use(
		'*',
		cors({
			origin: ['http://localhost:5173'],
			allowMethods: ['POST', 'GET', 'OPTIONS'],
			allowHeaders: ['Content-Type', 'Authorization'],
			credentials: true,
			exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
		})
	)
	.route('/', hono_root)
	.route('/zero-sync', hono_zero_sync)

export type AppType = typeof app
export default app

showRoutes(app, {
	verbose: true,
})
