import Link from "next/link";
import ArrowSVG from "../svg/ArrowDown";

const LinkPath = ({ path, name, menuDispatch }) => (
  <Link
    href={{
      pathname: path,
    }}
  >
    <a
      onClick={() => menuDispatch({ type: "closeAll" })}
      className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4"
    >
      {name}
    </a>
  </Link>
);

const LinkWithQuery = ({ link, menuDispatch }) => {
  const { tag, path } = link;
  return (
    <Link
      href={{
        pathname: path,
        query: { tag },
      }}
    >
      <a
        onClick={() => menuDispatch({ type: "closeAll" })}
        className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4"
      >
        {tag}
      </a>
    </Link>
  );
};

const SubMenuLinkView = ({ subRoutes, subRouteView, menuDispatch }) => {
  const { routeTitle, routes } = subRoutes;

  if (subRouteView === routeTitle) {
    return (
      <div className="relative flex">
        <button onClick={() => menuDispatch({ type: "closeSubRoute" })}>
          <ArrowSVG transform="rotate(180)" />
        </button>
        <div className="absolute top-10 flex flex-col bg_custom-dark">
          {routes.map((subLink) => (
            <LinkWithQuery
              key={subLink.id}
              link={subLink}
              menuDispatch={menuDispatch}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <button
      onClick={() =>
        menuDispatch({ type: "openSubMenu", menuName: routeTitle })
      }
    >
      <ArrowSVG />
    </button>
  );
};

export default function LinkContainer({
  siteMapRoutes,
  styleAttribute,
  subRouteView,
  menuDispatch,
}) {
  return (
    <ul className={`list-reset flex justify-evenly text-sm ${styleAttribute}`}>
      {siteMapRoutes.map((link) => (
        <li className="py-4 flex h-14 " key={link.id}>
          {link.subRoutes ? (
            <SubMenuLinkView
              subRouteView={subRouteView}
              subRoutes={link.subRoutes}
              menuDispatch={menuDispatch}
            />
          ) : null}

          <LinkPath
            menuDispatch={menuDispatch}
            path={link.path}
            name={link.name.toUpperCase()}
          />
        </li>
      ))}
    </ul>
  );
}
