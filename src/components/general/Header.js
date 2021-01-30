import SocialLinks from "./SocialLinks"

const Icon = () => (
          <img src="./mainImg/icon.png" />
)

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
    <div
      style={{ backgroundColor: "#fdefec" }}
      className="mt-0 mx-auto h-auto grid grid-rows-2 grid-col-3 place-items-center"
    >
      <div className="col-start-2 row-start-1 ">
        <Icon />
      </div>
      <div className="font-serf text-center  col-start-2 row-start-2">
        <Title />
        <Subtitle />
      </div>
      <div className="row-start-1 justify-self-end col-start-3 self-start">
        <SocialLinks />
      </div>
    </div>
  );};

