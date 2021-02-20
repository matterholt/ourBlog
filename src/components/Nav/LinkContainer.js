import Link from 'next/link'
import ArrowSVG from "../svg/ArrowDown";
 

const LinkPath = ({ path, name, handleMenu }) => {
  return (
    <Link
      href={{
        pathname: path,
      }}
    >
      <a
        onClick={() => handleMenu("closeAll")}
        className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4"
      >
        {name}
      </a>
    </Link>
  );
};

const LinkWithQuery = ({ link, handleMenu }) => {
  const { tag, path } = link;
  return (
    <Link
      href={{
        pathname: path,
        query: { tag },
      }}
    >
      <a
        onClick={() => handleMenu("closeAll")}
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
  handleMenu,
}) => {
  
  const { routeTitle ,routes} = subRoutes;


  if (subRouteView === routeTitle) {
    return (
      <div className="relative flex">
        <button onClick={() => handleMenu("closeSubRoute")}>
          <ArrowSVG transform="rotate(180)" />
        </button>
        <div className="absolute top-10 flex flex-col bg_custom-dark">
          {routes.map((subLink) => (
            <LinkWithQuery
              key={subLink.id}
              link={subLink}
              handleMenu={handleMenu}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <button onClick={() => handleMenu("openSubMenu", routeTitle)}>
        <ArrowSVG />
      </button>
    );
  }
};


export default function LinkContainer({
  siteMapRoutes,
  styleAttribute,
  subRouteView,
  handleMenu,
})
{

  return (
    <ul
      className={`list-reset flex items-center justify-evenly text-sm ${styleAttribute}`}
    >
      {siteMapRoutes.map((link) => (
          <li className="mr-2 flex" key={link.id}>
            {link.subRoutes ? (
              <SubMenuLinkView
                subRouteView={subRouteView}
                subRoutes={link.subRoutes}
                handleMenu={handleMenu}
              />
            ) : null}

            <LinkPath
              handleMenu={handleMenu}
              path={link.path}
              name={link.name.toUpperCase()}
            />
          </li>
        ))}
    </ul>
  );
};
