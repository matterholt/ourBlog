import Link from 'next/link'
import { useRouter } from 'next/router'

const Post = (props) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="blogPost__container">
      <Link href="/">
        <a>Back</a>
      </Link>
      <article>
        <h1>Post of {slug}</h1>
      </article>
      <style jsx>{`
        .blogPost__container {
          box-shadow: 2px 4px 5px gray;
          border-radius: 5px;
          width: 550px;
          margin: 25px;
        }
      `}</style>
    </div>
  )
}

// should use id or slug to get the post?

export default Post
