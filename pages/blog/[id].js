import React from "react"
import { client } from "../../libs/client"
import { getallblogid } from "/libs/posts"
import styles from "../../styles/Home.module.scss"

export default function Blog({ blog }) {
  return (
    <div>
      <main>
        <main className={styles.main}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.publishedAt}>{blog.publishedAt}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
            className={styles.post}
          />
        </main>
      </main>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const id = params.id
  const data = await client.get({ endpoint: "blogs", contentId: id })
  return {
    props: {
      blog: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = await getallblogid()
  return {
    paths: paths,
    fallback: false,
  }
}
