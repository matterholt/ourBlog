
import Content from "./Content"
import Image from "./Image"
import ReadTime from "./ReadTime"

export default function  LeadCardContainer ()  {
  return (
  <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
    {/* <a href="post.html" className="flex flex-wrap no-underline hover:no-underline"> */}
    <Image />
    <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
      <Content />
      <ReadTime />
    </div>
    {/* </a> */}
  </div>
)};
