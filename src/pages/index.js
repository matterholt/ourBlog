import styles from '../styles/Home.module.css'
import {getAllPostsForHome}from "../lib/api"

import Link from 'next/link'


function Home(props) {
   const firstPost = props.allPost[0];
   return (
     <div>
       {JSON.stringify(props.allPost)}
       <h1>{firstPost.title}</h1>
       <p>{firstPost.author.name}</p>
       <Link href={`/post/${firstPost.slug}`}>
         <a>{firstPost.slug}</a>
       </Link>
       <p>{firstPost.excerpt}</p>
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