import { load } from "cheerio"
import { client } from "../libs/client"
import BlogPost from "/components/BlogPost"

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => {
          return (
            <li key={blog.id}>
              <BlogPost
                title={blog.title}
                id={blog.id}
                img={
                  blog.hasOwnProperty("eyecatch")
                    ? blog.eyecatch.url
                    : "https://bit.ly/2Z4KKcF"
                }
                content={blog.content}
                updatedAt={blog.updatedAt}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  let data = await client.get({
    endpoint: "blogs",
  })

  const { contents } = data
  contents.map((blog_data, i) => {
    let text = ""
    const $ = load(blog_data.content)
    $("p").each((_, element) => {
      text = text + $(element).text()
    })

    if (text.length > 100) {
      text = text.slice(0, 100) + "..."
    }
    data.contents[i] = { ...blog_data, content: text }
  })

  return {
    props: {
      blog: data.contents,
    },
  }
}
