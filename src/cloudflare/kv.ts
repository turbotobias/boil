// const list = await event.context.cloudflare.env.kv.list()
// const res = await Promise.all(
//   list.keys.map(async (key) => {
//     const value = await event.context.cloudflare.env.kv.get(key.name)
//     return {
//       id: key.name,
//       value,
//     }
//   })
// )
