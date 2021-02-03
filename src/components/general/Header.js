import TitleSvg from "../svg/Title"
import Logo from "../svg/Logo";

const Title = () => (
    <h1 className="text-gray-700 font-extrabold text-xl md:text-5xl">
      Root and Blush
    </h1>
);


const Subtitle = () => (
      <p className="text-xl md:text-xs text-gray-500">
      Realistic step to clean and beautiful living for the whole family
    </p>
)

export default function Header() {
  return (
    <div className=" mb-4 mx-auto h-auto grid grid-rows-3 place-items-center">
      <Logo />
      <div className="col-start-1 row-start-2 ">
        <TitleSvg />
      </div>
      <div className="font-serf text-center  col-start-1 row-start-3">
        <Subtitle />
      </div>
    </div>
  );};

