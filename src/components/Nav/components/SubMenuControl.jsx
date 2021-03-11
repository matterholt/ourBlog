import PropTypes from "prop-types";

import {useRef} from "react";
import MenuButton from "./MenuButton";
import ArrowSVG from "../../svg/ArrowDown";

import {useClickOutside} from "../../../hooks/useClickOutside";

const baseSubButton = "grid items-center rounded-sm p-2 border ";

export default function SubMenuControl({
  children,
  menuDispatch,
  routeTitle,
  subRouteView,
}) {
  if (subRouteView !== routeTitle) {
    return (
      <div className="relative mr-5">
        <MenuButton
          buttonName="Open SubMenu"
          styleAttribute={`${baseSubButton}`}
          clickAction={() => menuDispatch({type: "openSubMenu", menuName: routeTitle})}
        >
          <ArrowSVG title="open subMenu" />
        </MenuButton>
      </div>
    );
  } if (subRouteView === routeTitle) {
    return (
      <div className="relative mr-5">
        <MenuButton
          buttonName="Close SubMenu"
          styleAttribute={`${baseSubButton}`}
          clickAction={() => menuDispatch({type: "openMainMenu", menuName: "close"})}
        >
          <ArrowSVG transform="rotate(180)" title="close subMenu" />
        </MenuButton>
        {children}
      </div>
    );
  }
  return <p>{JSON.stringify(subRouteView)}</p>;
}

SubMenuControl.propTypes = {
  menuDispatch: PropTypes.func.isRequired,
  children: PropTypes.element,
  routeTitle: PropTypes.string.isRequired,
  subRouteView: PropTypes.string.isRequired,
};
SubMenuControl.defaultProps = {
  children: null,
};
