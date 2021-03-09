import LinkRoute from "./LinkRoute";
import LinkButton from "./LinkButton";
import SubMenuControl from "./SubMenuControl";

const SubLink = ({sublink, menuDispatch}) => (
  <LinkButton menuDispatch={menuDispatch} styleAttribute="bg-red-100">
    <LinkRoute
      linkTitle={sublink.title}
      path={sublink.path}
      query={sublink.tag}
    />
  </LinkButton>
);

export default function SubMenu({menuDispatch, subroutes, subRouteView}) {
  const { routeTitle, routes } = subroutes;
  
  return (
    <SubMenuControl
      menuDispatch={menuDispatch}
      routeTitle={routeTitle}
      subRouteView={subRouteView}
    >
      <div className="flex flex-col absolute top-10 right-0">
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
