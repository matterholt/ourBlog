import Layout from "../general/Layout";
import Posts from "../articles/Posts";

export default function BlogPage({ children }) {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <Layout>
        {children}
        <Posts />
      </Layout>
    </div>
  );
}
