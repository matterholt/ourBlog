import PropTypes from "prop-types";
import {useRef} from "react";
import MenuItem from "./MenuItem";

//TODO ---> update the click on button
// bug on clicking on button then open cause clicked out side

import {useClickOutside} from "../../../hooks/useClickOutside";

export default function MainMenu({
  cssStyleAttribute = "", navMenuState, menuDispatch, webpageRoutes,
}) {
  const {subRouteView} = navMenuState;

  const refElem = useRef(null);
  useClickOutside(refElem, menuDispatch);

  return (
    <ul ref={refElem} className={cssStyleAttribute}>
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
