import LinkRoute from "./LinkRoute";
import SubMenuControl from "./SubMenuControl";

const SubLink = ({sublink, menuDispatch}) => (
  <LinkRoute
    name={sublink.title}
    path={sublink.path}
    query={sublink.tag}
    menuDispatch={menuDispatch}
    styleAttribute="bg-red-100 absolute "
  />
);

export default function SubMenu({menuDispatch, subroutes, subRouteView}) {
  const { routeTitle, routes } = subroutes;
  
  return (
    <SubMenuControl
      menuDispatch={menuDispatch}
      routeTitle={routeTitle}
      subRouteView={subRouteView}
    >
      <div>
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
