
import LatestBlogPost from "../LatestBlogPost";
import Layout from "../general/Layout";

import Subscribe from "../general/Subscribe";
import Author from "../general/Author";

import PurposeBlip from "./PurposeBlip"

import QuickBogLink from "./QuickBlogLink"





export default function Landing({post}) {
  return (
    <Layout>
      <PurposeBlip />
      <QuickBogLink />
      <LatestBlogPost post={post} />
      <Subscribe />
      {/* <Author /> */}
    </Layout>
  );
}