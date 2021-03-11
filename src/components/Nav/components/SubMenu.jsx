import PropTypes from "prop-types";
import {useRef} from "react";

import {useClickOutside} from "../../../hooks/useClickOutside";

import SubMenuControl from "./SubMenuControl";
import SubLink from "./SubLink";

export default function SubMenu({menuDispatch, subRoutes, subRouteView}) {
  const {routeTitle, routes} = subRoutes;
  const refElem = useRef(null);
  useClickOutside(refElem, menuDispatch);

  return (
    <SubMenuControl
      menuDispatch={menuDispatch}
      routeTitle={routeTitle}
      subRouteView={subRouteView}
    >
      <ul ref={refElem} className="flex flex-col absolute -right-5 top-10">
        {routes.map((link) => (
          <SubLink key={link.id} link={link} menuDispatch={menuDispatch} />
        ))}
      </ul>
    </SubMenuControl>
  );
}
SubMenu.propTypes = {
  subRoutes: PropTypes.shape({
    routeTitle: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  menuDispatch: PropTypes.func.isRequired,
  subRouteView: PropTypes.string.isRequired,
};
