import { must } from '@boil/utils/types'
import { Hono } from 'hono'
import { setCookie } from 'hono/cookie'
import { SignJWT } from 'jose'
import { env } from '../../../../generated/env'

export const hono_zero_sync = new Hono<{ Bindings: CloudflareBindings }>()

// See seed.sql
// In real life you would of course authenticate the user however you like.
const userIDs = [
	'6z7dkeVLNm',
	'ycD76wW4R2',
	'IoQSaxeVO5',
	'WndZWmGkO4',
	'ENzoNm7g4E',
	'dLKecN3ntd',
	'7VoEoJWEwn',
	'enVvyDlBul',
	'9ogaDuDNFx',
]

function randomInt(max: number) {
	return Math.floor(Math.random() * max)
}

hono_zero_sync.get('/login', async (c) => {
	const jwtPayload = {
		sub: userIDs[randomInt(userIDs.length)],
		iat: Math.floor(Date.now() / 1000),
	}

	const jwt = await new SignJWT(jwtPayload)
		.setProtectedHeader({ alg: 'HS256' })
		.setExpirationTime('30days')
		.sign(new TextEncoder().encode(must(env.ZERO_AUTH_SECRET)))

	setCookie(c, 'jwt', jwt, {
		expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
	})

	return c.text('ok')
})
