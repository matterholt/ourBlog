import Layout from "../general/Layout"
import Posts from "../articles/Posts"

export default function BlogPage  () {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <Layout>
        <Posts />
      </Layout>
    </div>
  );
}
