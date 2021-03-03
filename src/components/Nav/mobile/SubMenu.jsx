import LinkRoute from "./LinkRoute";
import SubMenuControl from "./SubMenuControl";

const SubLink = ({sublink, menuDispatch}) => (
  <LinkRoute
    name={sublink.title}
    path={`#${sublink.path}?=${sublink.tag}`}
    menuDispatch={menuDispatch}
    styleAttrubute={"subMenu__item"}
  />
);

export default function SubMenu({menuDispatch, subroutes, subRouteView}) {
  const {routeTitle, routes} = subroutes;
  return (
    <SubMenuControl
      menuDispatch={menuDispatch}
      routeTitle={routeTitle}
      subRouteView={subRouteView}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 43,
        }}
      >
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
