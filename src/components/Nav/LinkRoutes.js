import Link from 'next/link'
 

const PrimaryAtag = ({path, name }) => (
  <Link href={path}>
      <a className="inline-block py-2 px-4 text-gray-100 no-underline hover:underline">
        {name}
    </a>
    </Link>
);
const SecondaryAtag = ({ path , name }) => (
  <Link href={path}>
      <a className="inline-block text-gray-100 no-underline hover:text-gray-500 hover:underline py-2 px-4">
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

export default function LinkRoutes({webpageRoutes }) {
  return (
    <ul className="list-reset flex justify-center items-center text-sm col-span-2" >
      {webpageRoutes.map((link) => (
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