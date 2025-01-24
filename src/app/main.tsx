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
	server: import.meta.env.VITE_PUBLIC_SERVER,
	schema,
	// This is often easier to develop with if you're frequently changing
	// the schema. Switch to 'idb' for local-persistence.
	kvStore: 'mem',
})

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ZeroProvider zero={z}>
			<App />
		</ZeroProvider>
	</StrictMode>
)
