
import LatestBlogPost from "../LatestBlogPost";
import Layout from "../general/Layout";

import Subscribe from "../general/Subscribe";
import Author from "../general/Author";

import QuickBogLink from "./QuickBlogLink"


const PurposeBlip = () => (
  <div className="container bg-white m-1 w-auto h-96 grid place-items-center">
    <div  className="flex justify-center">
      <h2 className="m-0 p-0 self-center">
        This is what I'm about and what i do.
      </h2>
    </div>
  </div>
);


export default function Landing({post}) {
  return (
    <Layout>
      <QuickBogLink />
      <LatestBlogPost post={post} />
      <PurposeBlip />
      <Subscribe />
      {/* <Author /> */}
    </Layout>
  );
}