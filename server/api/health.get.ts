export default defineEventHandler(async () => {
  const response_ai = await $fetch('/api/ai')
  const datetime = new Date().toISOString()
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const json = JSON.stringify({ datetime, ai: (response_ai as any).response }, null, 4)

  return new Response(json, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
})
