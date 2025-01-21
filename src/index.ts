import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/',(c) => {
  return c.html(View())
})

app.get('/page',(c) => {
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

export default app
