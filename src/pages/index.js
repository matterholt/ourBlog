import { getAllPostsForHome } from '../lib/api'
import  BlockContent from '@sanity/block-content-to-react'
import Landing from "../components/landing/Index"

const Post = (post) => (
  <article>
    <h1>{post.title}</h1>
    <p>{post.author.name}</p>
    <Link href={`/post/${post.slug}`}>
      <a>{post.slug}</a>
    </Link>
    <BlockContent blocks={post.body} />
  </article>
);

function Home(props) {
  const firstPost = props.allPost[0]
  return (
    <main>
      <Landing/>
      <Post post={ firstPost}/>
    </main>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPost = await getAllPostsForHome(preview)
  return {
    props: { allPost, preview },
    revalidate: 1,
  }
}

export default Home
