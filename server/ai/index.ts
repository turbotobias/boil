import { createWorkersAI } from 'workers-ai-provider'
import { generateText } from 'ai'

export default defineEventHandler(async ({ context }) => {
  const workersai = createWorkersAI({ binding: context.cloudflare.env.ai })
  const result = await generateText({
    model: workersai('@cf/meta/llama-2-7b-chat-int8'),
    prompt: 'Write a 50-word essay about hello world.',
  })
  const response = await context.cloudflare.env.ai.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
    prompt: 'sort the following array of numbers in ascending order: [5, 3, 8, 1, 2, 7, 4, 6]',
  })

  console.log(response)

  return new Response(JSON.stringify(response), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
})
