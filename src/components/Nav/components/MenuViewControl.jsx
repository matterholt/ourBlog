import PropTypes from "prop-types";

import MenuButton from "./MenuButton";

// default for main buttons for nav menu
// capable to add custom style at component level

const mainButtonDefault = "absolute text-sm right-5 top-5 p-2 border-2 w-15 h-11 rounded-sm";

// Control when the navigation menu is mounted or not..
export default function MenuViewControl({isMobileMenuOpen, menuDispatch, children}) {
  if (!isMobileMenuOpen) {
    return (
      <MenuButton
        buttonName="Open Menu"
        styleAttribute={`${mainButtonDefault} bg_custom-dark text-white`}
        clickAction={() => menuDispatch({type: "openMainMenu"})}
      >
        MENU
      </MenuButton>
    );
  }
  if (isMobileMenuOpen) {
    return (
      <>
        <MenuButton
          buttonName="Close Menu"
          styleAttribute={mainButtonDefault}
          clickAction={() => menuDispatch({type: "closeMenus"})}
        >
          CLOSE
        </MenuButton>
        {children}
      </>
    );
  }
  return null;
}
MenuViewControl.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  menuDispatch: PropTypes.func.isRequired,
  children: PropTypes.element,
};
MenuViewControl.defaultProps = {
  children: null,
};
