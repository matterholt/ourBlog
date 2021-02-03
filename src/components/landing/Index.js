
import HeroArticle from "../heroArticle";
import Layout from "../general/Layout";

import QuickBogLink from "./QuickBlogLink"


const Intro = () => (
  <div className="w-auto h-96 grid place-items-center">
    <div  className="bg-black text-white flex justify-center">
      <h2 className="m-0 p-0 self-center">
        This is what I'm about and what i do.
      </h2>
    </div>
  </div>
);


export default function Landing() {
  return (
    <Layout>
      <QuickBogLink />
      <Intro />
      <h3 className="text-center">Latest Post</h3>
      {/* <HeroArticle post={LeadPost} /> */}
    </Layout>
  );
}