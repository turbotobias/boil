import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Zero } from '@rocicorp/zero'
import { ZeroProvider } from '@rocicorp/zero/react'
import { decodeJwt } from 'jose'
import Cookies from 'js-cookie'
import { schema } from './schema.ts'

const encodedJWT = Cookies.get('jwt')
const decodedJWT = encodedJWT && decodeJwt(encodedJWT)
const userID = decodedJWT?.sub ? (decodedJWT.sub as string) : 'anon'

const z = new Zero({
	userID,
	auth: () => encodedJWT,
	// Point to local zero-cache server in development
	server: import.meta.env.DEV ? 'http://localhost:4848' : 'https://v1-zero-cache.fly.dev',
	schema,
	// Use persistent storage in production
	kvStore: import.meta.env.DEV ? 'mem' : 'idb',
})

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ZeroProvider zero={z}>
			<App />
		</ZeroProvider>
	</StrictMode>
)
