import HeroImage from './HeroImage'

const Title = ({ children }) => (
  <div className="m-10 bg-white bg-opacity-40 text-center p-10 col-start-2 row-start-1">
    <h1 className="text-gray-700 font-extrabold text-3xl md:text-5xl">
      Root and Blush
    </h1>
    <p className="text-xl md:text-2xl text-gray-500">Beauty though natural</p>
    {children}
  </div>
);


const QuickLinks = [
  
]

export default function Header() {
  return (
    <div className="mt-0 w-screen mx-auto relative my-10">
      <HeroImage />
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
        <Title />
          <ul className="flex justify-between p-10 row-start-3 col-span-3">
            <li>Recipes</li>
            <li>Makeup</li>
            <li>Household</li>
          </ul>

      </div>
    </div>
  );};

