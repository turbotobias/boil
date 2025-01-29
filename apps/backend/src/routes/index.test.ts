import { describe, expect, test } from 'bun:test'
import app from './index'

describe('app', () => {
	test('GET / returns HTML with Hello Hono', async () => {
		const res = await app.request('/')
		expect(res.status).toEqual(200)
		expect(res.headers.get('content-type')).toContain('text/html')
		const text = await res.text()
		expect(text).toContain('Hello Hono!')
	})

	test('GET /page returns same HTML as /', async () => {
		const rootRes = await app.request('/')
		const pageRes = await app.request('/page')

		expect(pageRes.status).toEqual(200)
		expect(pageRes.headers.get('content-type')).toContain('text/html')

		const rootText = await rootRes.text()
		const pageText = await pageRes.text()
		expect(pageText).toStrictEqual(rootText)
	})
})
