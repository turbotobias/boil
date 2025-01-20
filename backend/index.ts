import { Hono } from 'hono'
import { html } from 'hono/html'
import type { Env } from '../worker-configuration'

const app = new Hono<{ Bindings: Env }>()

app.get('/', (c) => {
  return c.html(View())
})

const View = () => {
  return html`
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  `
}

app.get('/page', (c) => {
  return c.html(View())
})

export default app
