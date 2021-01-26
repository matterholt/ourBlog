import HeroArticle from "../heroArticle";
import Layout from "../general/Layout";
export default function Landing({ LeadPost }) {
  return (
    <Layout>
      <HeroArticle post={LeadPost} />
    </Layout>
  );
}