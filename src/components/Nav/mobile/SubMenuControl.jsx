import MenuButton from "./MenuButton";
import ArrowSVG from "../../svg/ArrowDown";

const baseSubButton = "grid items-center rounded-sm p-2 border";

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
          styleAttribute={`relative ${baseSubButton}`}
          clickAction={() => menuDispatch({type: "openSubMenu", menuName: routeTitle})}
        >
          <ArrowSVG />
        </MenuButton>
      </div>
    );
  } if (subRouteView === routeTitle) {
    return (
      <div
        style={{display: "flex", flexDirection: "row", position: "relative"}}
      >
        <MenuButton
          styleAttribute={baseSubButton}
          clickAction={() => menuDispatch({type: "viewMainMenuOnly", menuName: "close"})}
        >
          <ArrowSVG transform="rotate(180)" />
        </MenuButton>
        {children}
      </div>
    );
  }
  return <p>{JSON.stringify(subRouteView)}</p>;
}
