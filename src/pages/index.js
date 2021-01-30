import { getAllPostsForHome } from '../lib/api'
import Landing from "../components/Landing/index"


function Home(props) {
  const firstPost = props.allPost[0]
  return (
    <main>
      <Landing LeadPost={firstPost}/>
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
