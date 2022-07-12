import { client } from "./client"

export async function getallblogid() {
  const data = await client.get({ endpoint: "blogs" })
  const paths = data.contents.map((content) => {
    return { params: { id: `${content.id}` } }
  })
  return paths
}
