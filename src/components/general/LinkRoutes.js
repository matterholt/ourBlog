import Link from 'next/Link'

const routes = [
  {id: 1, path: "/", name: "Home", attribute:"primary" },
  { id: 2, path: "/Blog", name: "Blog", attribute:"primary" },
  { id: 3, path: "#", name: "CRUNCHI", attribute:"secondary" },
  { id: 4, path: "#", name: "ETSY SHOP" , attribute:"secondary"},
]


const PrimaryAtag = ({path, name }) => (
  <Link href={path}>
      <a className="inline-block py-2 px-2 text-gray-700 no-underline hover:underline">
        {name}
    </a>
    </Link>
);
const SecondaryAtag = ({ path , name }) => (
  <Link href={path}>
      <a className="inline-block text-gray-400 no-underline hover:text-gray-900 hover:underline py-2 px-2">
        {name}
    </a>
    </Link>
);

const LinkTypeStyleContainer = ({ linkType,path, name }) => {
  if (linkType == "primary") {
    return <PrimaryAtag name={name} path={path} />;
  } else {
    return <SecondaryAtag name={name} path={path} />;
  }
};

export default function LinkRoutes() {
  return (
    <div className="flex w-1/2 pl-4 text-sm">
      <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
        {routes.map((link) => (
          <li className="mr-2" key={link.id}>
            <LinkTypeStyleContainer
              path={link.path }
                linkType={link.attribute}
                name={link.name}
              />
          </li>
        ))}
      </ul>
    </div>
  );
};
