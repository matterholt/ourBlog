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


const Test = () => {
  return (
<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div className="flex-shrink-0">
    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-gray-500">You have a new message!</p>
  </div>
</div>
  )}


function Home(props) {
   const firstPost = props.allPost[0];
   return (
     <div>
        <Header />
        <Test/>
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