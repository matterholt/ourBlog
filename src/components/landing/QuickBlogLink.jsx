import Link from "next/link";

import Image from "next/image";

import { blogRoutes } from "../../webpageRoutes";
const {routes} = blogRoutes;

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
      <a className="lg:w-40 md:w-2/5 w-full m-1 relative transition-all containerAction">
        <Image
          style={{ backfaceVisibility: "hidden" }}
          className="opacity-100 hover:opacity-80 "
          src={image}
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
  return (
    <div className="container my-20 flex flex-wrap lg:flex-nowrap justify-evenly">
      {routes.map((linkData) => (
        <ImageLink key={linkData.id} linkData={linkData} />
      ))}
    </div>
  );
}
