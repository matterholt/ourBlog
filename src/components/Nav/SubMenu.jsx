import LinkRoute from "./LinkRoute";
import LinkButton from "./LinkButton";
import SubMenuControl from "./SubMenuControl";

const SubLink = ({sublink, menuDispatch}) => (
  <LinkButton menuDispatch={menuDispatch} styleAttribute="bg-red-100 h-16 w-40">
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
      <div className="flex flex-col absolute -right-5 top-10">
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
