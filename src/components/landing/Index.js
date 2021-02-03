import Link from 'next/link';

import HeroArticle from "../heroArticle";
import Layout from "../general/Layout";
import Post from "../articles/Posts"
import image from "next/image";


import {blogRoutes } from "../../routes/index"

const GlassContainer = ({ children }) => (
  <div
    className="w-full text-center p-5 top-1/4 left-0 absolute transition-all translateZUpdate"
  >
    {children}
  </div>
);





const ImageLink = ({ linkData }) => {
  const { image, path, title,tag } = linkData;
  return (
    <Link
      href={{
        pathname: path,
        query: { tag },
      }}
    >
      <a className="w-1/4 m-1 relative transition-all containerAction">
        <img
          src={image}
          style={{ backfaceVisibility: "hidden" }}
          className="opacity-75 hover:opacity-100 "
        />
        <GlassContainer >
          <h2>{title}</h2>
        </GlassContainer>
      </a>
    </Link>
  );
};


const LandingImages = () => (
  <div className="flex flex-row flex-grow flex-shrink justify-evenly mb-10 ">
    {blogRoutes.map((linkData) => {
      return <ImageLink key={linkData.id} linkData={linkData} />;
    })}
  </div>
);


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
      <LandingImages />
      <Intro />
      <h3 className="text-center">Latest Post</h3>
      {/* <HeroArticle post={LeadPost} /> */}
    </Layout>
  );
}