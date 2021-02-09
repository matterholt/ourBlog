import BlogPage from "../components/blog/Index";
import { useRouter } from 'next/router';

function Blog() {
  const router = useRouter()
  return (
    <BlogPage>
      <h3>{router.query.tag || 'all post'}</h3>
    </BlogPage>
  );
}

export default Blog
