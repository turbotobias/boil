import { getRequestListener } from '@hono/node-server'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import { app } from './src/api/index.js'

if (process.env.NODE_ENV === 'development') {
	console.log('NODE ENV!')
	dotenv.config({ path: '.env' })
}

export default defineConfig({
	root: './src/app',
	build: {
		target: 'es2022',
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'es2022',
		},
	},
	plugins: [
		react(),
		{
			name: 'api-server',
			configureServer(server) {
				server.middlewares.use((req, res, next) => {
					if (!req.url?.startsWith('/api')) {
						return next()
					}
					getRequestListener(async (request) => {
						return await app.fetch(request, {})
					})(req, res)
				})
			},
		},
	],
})
