
// import Content from "./Content"
import Image from "./Image"
import ReadTime from "./ReadTime"
import BlockContent from "@sanity/block-content-to-react";


/*
const Post = (post) => (
  <article>
    <h1>{post.title}</h1>
    <p>{post.author.name}</p>
    <Link href={`/post/${post.slug}`}>
      <a>{post.slug}</a>
    </Link>
    <BlockContent blocks={post.body} />
  </article>
);
*/


function Article({ children }) {
  return (
    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
      {children}
    </div>
  );
};
const Title = ({ title }) => (
  <h2 className="w-full font-bold text-xl text-gray-900 px-6">{title}</h2>
);
const Content = ({ body }) => (
  <div className="text-gray-800 font-serif text-base px-6 mb-5">
    <BlockContent blocks={body} />
  </div>
);
const RelatedTag = ({slug }) => (
        <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
    {slug}
      </p>
)

export default function HeroArticle({post}) {
  return (
    <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
      <a
        href="post.html"
        className="flex flex-wrap no-underline hover:no-underline"
      >
        <Image />
        <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
          <Article>
            <RelatedTag slug={post.slug} />
          <Title title={post.title} />
          <Content body={post.body} />
          </Article>
          <ReadTime />
        </div>
      </a>
    </div>
  );
};
