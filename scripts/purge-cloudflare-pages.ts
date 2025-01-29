import { env } from '../generated/env'

/**
 * Purge cloudflare pages cache (on deploy?)
 */
;(async () => {
	const url = `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}/pages/projects/${env.CLOUDFLARE_NAME}/purge_build_cache`
	console.log(env.CLOUDFLARE_API_TOKEN)
	return await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${env.CLOUDFLARE_API_TOKEN}`,
		},
	})
		.then((res) => res.json())
		.then((json) => console.log(json))
		.catch((err) => console.error('could not purge cache:', err))
})()
