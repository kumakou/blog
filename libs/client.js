import { createClient } from "microcms-js-sdk"

export const client = createClient({
  serviceDomain: "tjcdckl0oe",
  apiKey: process.env.API_KEY,
})
