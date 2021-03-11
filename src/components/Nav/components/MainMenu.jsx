import PropTypes from "prop-types";

import MenuItem from "./MenuItem";


export default function MainMenu({
  cssStyleAttribute = "", navMenuState, menuDispatch, webpageRoutes,
}) {
  const {subRouteView} = navMenuState;




  return (
    <ul className={cssStyleAttribute}>
      {webpageRoutes.map((link) => (
        <MenuItem
          key={link.id}
          link={link}
          subRouteView={subRouteView}
          menuDispatch={menuDispatch}
        />
      ))}
    </ul>
  );
}

MainMenu.propTypes = {
  cssStyleAttribute: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  menuDispatch: PropTypes.func.isRequired,
  webpageRoutes: PropTypes.arrayOf(PropTypes.object).isRequired,
  navMenuState: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  ).isRequired,
};

MainMenu.defaultProps = {
  cssStyleAttribute: "",
};
