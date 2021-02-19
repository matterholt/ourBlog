import Link from 'next/link'
import ArrowSVG from "../svg/ArrowDown";
 

const LinkPath = ({ path, name, handleMenuClose }) => {
  return (
    <Link
      href={{
        pathname: path,
      }}
    >
      <a
        onClick={() => handleMenuClose("closeAll")}
        className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4"
      >
        {name}
      </a>
    </Link>
  );
};

const LinkWithQuery = ({ link, handleMenuClose }) => {
  const { tag, path } = link;
  return (
    <Link
      href={{
        pathname: path,
        query: { tag },
      }}
    >
      <a
        onClick={() => handleMenuClose("closeAll")}
        className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4"
      >
        {tag}
      </a>
    </Link>
  );
};

const SubMenuLinkView = ({
  subRoutes,
  subRouteView,
  handleMenuClose,
}) => {
  if (subRouteView === subRoutes) {
    return (
      <div className="relative flex">
        <button onClick={() => handleMenuClose("closeSubRoute")}>
          <ArrowSVG transform="rotate(180)" />
        </button>
        <div className="absolute top-10 flex flex-col bg_custom-dark">
          {subRoutes.map((subLink) => (
            <LinkWithQuery
              key={subLink.id}
              link={subLink}
              handleMenuClose={handleMenuClose}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <button onClick={() => setSubRouteView(subRoutes)}>
        <ArrowSVG />
      </button>
    );
  }
};


export default function LinkContainer({
  webpageRoutes = [],
  styleAttribute,
  subRouteView,
  handleMenuClose,
}) {
  return (
    <ul
      className={`list-reset flex items-center justify-evenly text-sm ${styleAttribute}`}
    >
      {webpageRoutes.map((link) => (
        <li className="mr-2 flex" key={link.id}>
          {link.subRoutes ? (
            <SubMenuLinkView
              subRouteView={subRouteView}
              subRoutes={link.subRoutes}
              handleMenuClose={handleMenuClose}
            />
          ) : null}

          <LinkPath
            handleMenuClose={handleMenuClose}
            path={link.path}
            name={link.name.toUpperCase()}
          />
        </li>
      ))}
    </ul>
  );
};
