import { get_duration } from '~~/shared/utils/format'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    // get value from query
    const body = await readBody(event)
    if (!body.id) throw new Error('id is required')
    if (!body.embedding) throw new Error('embedding is required')

    const time_ai_cf = performance.now()
    const res_ai_cf = await event.context.cloudflare.env.ai.run(
      '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
      {
        messages: [
          { role: 'system', content: 'You are helpful assistant' },
          {
            role: 'user',
            content: body.prompt,
          },
        ],
      }
    )
    const duration_ai_cf = get_duration(time_ai_cf)
    return new Response(JSON.stringify({ res_ai_cf, duration_ai_cf }), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', message: error }, null, 2),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
})
