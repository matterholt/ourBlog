import BlogPage from "../components/blog/Index";
import { useRouter } from 'next/router';

function Blog() {
  const router = useRouter()
  return (
    <BlogPage>
      <h1>BLOG Page for {router.query.tag || 'all post'}</h1>
    </BlogPage>
  );
}

export default Blog
