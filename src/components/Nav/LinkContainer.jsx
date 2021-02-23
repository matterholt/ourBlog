import PropTypes from "prop-types";
import ArrowSVG from "../svg/ArrowDown";

import LinkRoutePath from "./LinkRoutePath";
import QuarryLinkPath from "./QuarryLinkPath";

const SubMenuLinkView = ({ subRoutes, subRouteView, menuDispatch }) => {
  const { routeTitle, routes } = subRoutes;

  if (subRouteView === routeTitle) {
    return (
      <div className="relative flex">
        <button
          type="button"
          onClick={() => menuDispatch({ type: "closeSubRoute" })}
        >
          <ArrowSVG transform="rotate(180)" />
        </button>
        <ul className="list-reset absolute top-10 flex flex-col bg_custom-dark">
          {routes.map((subLink) => (
            <QuarryLinkPath
              key={subLink.id}
              link={subLink}
              menuDispatch={menuDispatch}
            />
          ))}
        </ul>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={() =>
        menuDispatch({ type: "openSubMenu", menuName: routeTitle })
      }
    >
      <ArrowSVG />
    </button>
  );
};

SubMenuLinkView.propTypes = {
  subRoutes: PropTypes.shape({
    routeTitle: PropTypes.string.isRequired,
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        attribute: PropTypes.string,
        id: PropTypes.number,
        image: PropTypes.string,
        path: PropTypes.string,
        tag: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
  }).isRequired,
  subRouteView: PropTypes.string,
  menuDispatch: PropTypes.func.isRequired,
};
SubMenuLinkView.defaultProps = {
  subRouteView: null,
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
          <LinkRoutePath
            menuDispatch={menuDispatch}
            path={link.path}
            name={link.name.toUpperCase()}
          />
          {link.subRoutes ? (
            <SubMenuLinkView
              subRouteView={subRouteView}
              subRoutes={link.subRoutes}
              menuDispatch={menuDispatch}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
}
