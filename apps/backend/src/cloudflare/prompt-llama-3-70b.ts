// export const get_prompt = async (id: string, embedding: string) => {

//     const time_ai_cf = performance.now()
//     const res_ai_cf = await event.context.cloudflare.env.ai.run(
//       '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
//       {
//         messages: [
//           { role: 'system', content: 'You are helpful assistant' },
//           {
//             role: 'user',
//             content: body.prompt,
//           },
//         ],
//       }
//     )
//     const duration_ai_cf = get_duration(time_ai_cf)
// }
