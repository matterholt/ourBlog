import PropTypes from "prop-types";

import LinkRoute from "./LinkRoute";
import LinkButton from "./LinkButton";

import SubMenu from "./SubMenu";

// default list styles
const listStyle = "flex justify-between items-center items-center h-16 w-40 ";

function MenuItem({link, menuDispatch, subRouteView}) {
  return (
    <li className={listStyle}>
      <LinkButton menuDispatch={menuDispatch}>
        <LinkRoute linkTitle={link.title.toUpperCase()} path={link.path} />
      </LinkButton>

      {link.subRoutes ? (
        <SubMenu
          menuDispatch={menuDispatch}
          subroutes={link.subRoutes}
          subRouteView={subRouteView}
        />
      ) : null}
    </li>
  ); 
}

export default MenuItem;

MenuItem.propTypes = {
  link: PropTypes.shape({
    attribute: PropTypes.string,
    id: PropTypes.number,
    path: PropTypes.string,
    subRoutes: PropTypes.shape({
      routeTitle: PropTypes.string,
      routes: PropTypes.arrayOf(
        PropTypes.object,
      ),
    }),
    title: PropTypes.string,
  }).isRequired,
  menuDispatch: PropTypes.func.isRequired,
  subRouteView: PropTypes.string.isRequired,
};
