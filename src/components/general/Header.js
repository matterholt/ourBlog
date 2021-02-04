import TitleSvg from "../svg/Title"
import Logo from "../svg/Logo";

import HomeLink from "../Nav/HomeLink"


const Subtitle = () => (
      <p className="text-xl md:text-xs text-gray-500">
      Realistic step to clean and beautiful living for the whole family
    </p>
)

export default function Header() {
  return (
    <div className=" mb-4 mx-auto h-auto grid grid-rows-2 place-items-center">
      <HomeLink>
      {/* <Logo /> */}
      <div className="col-start-1 row-start-1">
        <TitleSvg />
      </div>
      </HomeLink>
      <div className="font-serf text-center  col-start-1 row-start-2">
        <Subtitle />
      </div>
    </div>
  );};

