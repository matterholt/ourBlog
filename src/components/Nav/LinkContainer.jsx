import PropTypes from "prop-types";
import ArrowSVG from "../svg/ArrowDown";

import LinkRoutePath from "./LinkRoutePath";
import QuarryLinkPath from "./QuarryLinkPath";


const SubMenuLinkView = ({subRoutes, subRouteView, menuDispatch}) => {
  const {routeTitle, routes} = subRoutes;

  if (subRouteView === routeTitle) {
    return (
      <div className="relative ">
        <button
          className="relative grid items-center rounded-sm p-2 border"
          type="button"
          onClick={() => menuDispatch({type: "closeSubRoute"})}
        >
          <ArrowSVG transform="rotate(180)" />
        </button>
        <ul
          className="list-reset absolute top-10 flex flex-col -left-2 bg_custom-light"
        >
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
    <div>
      <button
        className="grid items-center rounded-sm p-2 border"
        type="button"
        onClick={() =>
          menuDispatch({type: "openSubMenu", menuName: routeTitle})
        }
      >
        <ArrowSVG />
      </button>
    </div>
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
  styleattribute = "",
  subRouteView,
  menuDispatch,
}) {
  return (
    <ul className={`list-reset flex justify-evenly text-sm ${styleattribute}`}>
      {siteMapRoutes.map((link) => (
        <li className="py-4 flex h-14 " key={link.id}>
          {link.subRoutes ? (
            <SubMenuLinkView
              subRouteView={subRouteView}
              subRoutes={link.subRoutes}
              menuDispatch={menuDispatch}
            />
          ) : null}

          <LinkRoutePath
            menuDispatch={menuDispatch}
            path={link.path}
            name={link.name.toUpperCase()}
          />
        </li>
      ))}
    </ul>
  );
}
LinkContainer.propTypes = {
  siteMapRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      attribute: PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      path: PropTypes.string,
      tag: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  styleattribute: PropTypes.string,
  subRouteView: PropTypes.string,
  menuDispatch: PropTypes.func.isRequired,
};
LinkContainer.defaultProps = {
  styleattribute: "",
  subRouteView: null,
};
