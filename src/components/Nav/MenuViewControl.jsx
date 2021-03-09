
import MenuButton from "./MenuButton";

// default for main buttons for nav menu
// capable to add custom style at component level


const mainButtonDefault = "absolute text-sm right-3 top-10 p-2 border-2 w-15 h-11 rounded-sm";
// Control when the navigation menu is mounted or not..
export default function MenuViewControl({isMobileMenuOpen, menuDispatch, children}) {
  if (!isMobileMenuOpen) {
    return (
      <MenuButton
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
          className={mainButtonDefault}
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