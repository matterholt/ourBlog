import { getAllPostsForHome } from '../lib/api'
import Landing from "../components/Landing/index"
import Head from "next/head";

function Home(props) {
 
  return (
    <div>
      <Head>
        <title>Root and Blush</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing />
    </div>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const allPost = await getAllPostsForHome(preview)
//   return {
//     props: { allPost, preview },
//     revalidate: 1,
//   }
// }

export default Home
