import Link from 'next/Link'


const HomeRoute = { id: 0, path: "/", name: "Home", attribute: "primary" };
const routes = [
  { id: 1, path: "/", name: "Clean Beauty", attribute: "primary" },
  { id: 2, path: "/", name: "Safe Products", attribute: "primary" },
  { id: 3, path: "/", name: "Recipes", attribute: "primary" },
  { id: 4, path: "/", name: "Lifestyle", attribute: "primary" },
  { id: 5, path: "/", name: "Education", attribute: "primary" },
];



const PrimaryAtag = ({path, name }) => (
  <Link href={path}>
      <a className="inline-block py-2 px-4 text-gray-700 no-underline hover:underline">
        {name}
    </a>
    </Link>
);
const SecondaryAtag = ({ path , name }) => (
  <Link href={path}>
      <a className="inline-block text-gray-400 no-underline hover:text-gray-900 hover:underline py-2 px-4">
        {name}
    </a>
    </Link>
);

const LinkTypeStyleContainer = ({ linkType, path, name }) => {
  if (linkType == "primary") {
    return <PrimaryAtag name={name} path={path} />;
  } else {
    return <SecondaryAtag name={name} path={path} />;
  }
};

export default function LinkRoutes() {
  return (
      <ul className="list-reset flex justify-center items-center text-sm">
        {routes.map((link) => (
          <li className="mr-2" key={link.id}>
            <LinkTypeStyleContainer
              path={link.path}
              linkType={link.attribute}
              name={link.name.toUpperCase()}
            />
          </li>
        ))}
      </ul>
  );
};
