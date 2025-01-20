import { get_duration } from '~~/shared/utils/format'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const body = await readBody(event)
    if (!body.id) throw new Error('id is required')
    if (!body.embedding) throw new Error('embedding is required')

    const ai = event.context.cloudflare.env.ai
    const vectorize = event.context.cloudflare.env.vectorize
    const kv = event.context.cloudflare.env.kv

    const time_kv = performance.now()
    await kv.put(body.id, body.embedding)
    const kvres = await kv.get(body.id)
    const duration_kv = get_duration(time_kv)

    console.log(kvres)

    const time_embed = performance.now()
    const res_embed = await ai.run('@cf/baai/bge-base-en-v1.5', {
      text: body.embedding,
    })
    const duration_embed = get_duration(time_embed)
    const embedding_nautila = res_embed.data[0]
    if (!embedding_nautila) throw new Error('could not create embeddings')

    const inserted = await vectorize.upsert([
      {
        id: body.id,
        values: embedding_nautila,
      },
    ])
    console.log(inserted)

    const response = JSON.stringify(
      {
        query,
        kvres,
        duration_kv,
        duration_embed,
        id: body.id,
        inserted,
        embedding: body.embedding,
      },
      null,
      2
    )

    return new Response(response, {
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
