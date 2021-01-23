import styles from '../styles/Home.module.css'
import {getAllPostsForHome}from "../lib/api"
const BlockContent = require("@sanity/block-content-to-react");
import Link from 'next/link'

const Header = () => (
  <header>
    <p>Sign in</p>
    <h1>Our Blog</h1>
    <p>search</p>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-around;
      }
    `}</style>
  </header>
);


function Home(props) {
   const firstPost = props.allPost[0];
   return (
     <div>
       <Header />
       <main>
         <article>
       <h1>{firstPost.title}</h1>
       <p>{firstPost.author.name}</p>
       <Link href={`/post/${firstPost.slug}`}>
         <a>{firstPost.slug}</a>
       </Link>
       <BlockContent blocks={firstPost.body}/>
</article>
       </main>
     </div>
   );
}

export async function getStaticProps({ preview = false }) {
  const allPost = await getAllPostsForHome(preview)
  return{
    props: { allPost, preview },
    revalidate:1
  }
}


export default Home