import Link from "next/link";

import Layout from "../general/Layout";
import Image from "next/image";

import { blogRoutes } from "../../routes/index";

const GlassContainer = ({ children }) => (
  <div className="w-full text-gray-600 text-center p-5 top-1/4 left-0 absolute transition-all translateZUpdate">
    {children}
  </div>
);

const ImageLink = ({ linkData }) => {
  const { image, path, title, tag } = linkData;
  return (
    <Link
      href={{
        pathname: path,
        query: { tag },
      }}
    >
      <a className="w-1/4 m-1 relative transition-all containerAction">
        <Image
          style={{ backfaceVisibility: "hidden" }}
          className="opacity-75 hover:opacity-100 "
          src={ image}
          layout="responsive"
          width={375}
          height={500}
        />
        <GlassContainer>
          <h2>{title}</h2>
        </GlassContainer>
      </a>
    </Link>
  );
};

export default function QuickBogLink() {
    return(
  <div className="flex flex-row flex-grow flex-shrink justify-evenly mb-10 ">
    {blogRoutes.map((linkData) => {
      return <ImageLink key={linkData.id} linkData={linkData} />;
    })}
  </div>
)};
