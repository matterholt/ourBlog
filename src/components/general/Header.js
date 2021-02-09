import SiteName from "../svg/SiteName";
import Logo from "../svg/Logo";

import HomeLink from "../Nav/HomeLink"


const Subtitle = () => (
      <p className="text-xl md:text-xs m-5 text-gray-500">
      Realistic step to clean and beautiful living for the whole family
    </p>
)

export default function Header() {
  return (
    <div className="my-10 h-60 flex flex-col font-serf text-center justify-center">
      <HomeLink>
          <SiteName />
      </HomeLink>
      <Subtitle />
    </div>
  );};

