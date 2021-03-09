import PropTypes from "prop-types";

import SubMenuControl from "./SubMenuControl";
import SubLink from "./SubLink";

export default function SubMenu({menuDispatch, subroutes, subRouteView}) {
  const {routeTitle, routes} = subroutes;

  return (
    <SubMenuControl
      menuDispatch={menuDispatch}
      routeTitle={routeTitle}
      subRouteView={subRouteView}
    >
      <div className="flex flex-col absolute -right-5 top-10">
        {routes.map((sublink) => (
          <SubLink
            key={sublink.id}
            sublink={sublink}
            menuDispatch={menuDispatch}
          />
        ))}
      </div>
    </SubMenuControl>
  );
}
SubMenu.propTypes = {
  subroutes: PropTypes.shape({
    routeTitle: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  menuDispatch: PropTypes.func.isRequired,
  subRouteView: PropTypes.string.isRequired,
};
