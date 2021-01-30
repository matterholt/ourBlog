import HeroArticle from "../heroArticle";
import Layout from "../general/Layout";
import Post from "../articles/Posts"


const LandingImages = () => (
  <div className="flex flex-row flex-grow flex-shrink justify-evenly mb-10">
    <img
      className="w-1/4 m-1"
      src="https://source.unsplash.com/collection/225/300x500"
    />
    <img
      className="w-1/4 m-1"
      src="https://source.unsplash.com/collection/226/300x500"
    />
    <img
      className="w-1/4 m-1"
      src="https://source.unsplash.com/collection/227/300x500"
    />
    <img
      className="w-1/4 m-1"
      src="https://source.unsplash.com/collection/228/300x500"
    />
  </div>
);

export default function Landing({ LeadPost }) {
  return (
    <Layout>
      <LandingImages/>
      {/* <HeroArticle post={LeadPost} /> */}
    </Layout>
  );
}