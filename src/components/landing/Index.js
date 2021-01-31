import HeroArticle from "../heroArticle";
import Layout from "../general/Layout";
import Post from "../articles/Posts"
import image from "next/image";


const linksData = [
  {id: 1, image: "https://source.unsplash.com/collection/225/300x500", path: "/clean_beauty", title: "Clean Beauty" },
  {id: 2, image: "https://source.unsplash.com/collection/226/300x500", path:"/clean_beauty",title:"Clean Beauty"},
  {id: 3, image: "https://source.unsplash.com/collection/227/300x500", path: "/recipes", title: "Recipes" },
  {id: 4, image: "https://source.unsplash.com/collection/228/300x500", path:"/safe_products",title:"Safe Products"},
]


const ImageLink = ({ imgSrc, title }) => (
  <div className="w-1/4 m-1 relative">
    <div className="absolute z-10 bg-white-900 w-auto h-auto inset-0 text-white  grid place-items-center">
      <h2>{title}</h2>
    </div>
    <img src={imgSrc} />
  </div>
);


const LandingImages = () => (
  <div className="flex flex-row flex-grow flex-shrink justify-evenly mb-10">
    {linksData.map((link) => {
      const { image, path, title } = link
      return <ImageLink
        key={link.id}
        imgSrc={image}
        path={path}
        title={title}
        />;
    })}
  </div>
);

export default function Landing({ LeadPost }) {
  return (
    <Layout>
      <LandingImages/>
      <HeroArticle post={LeadPost} />
    </Layout>
  );
}