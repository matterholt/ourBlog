import SubMenu from "./SubMenu";
import LinkRoute from "./LinkRoute";

const MenuItem = ({link, menuDispatch, subRouteView}) => (
  <li style={{display: "flex", width: 150}}>
    <LinkRoute
      name={link.title.toUpperCase()}
      path={`#${link.path}`}
      menuDispatch={menuDispatch}
    />
    {link.subRoutes ? (
      <SubMenu
        menuDispatch={menuDispatch}
        subroutes={link.subRoutes}
        subRouteView={subRouteView}
      />
    ) : null}
  </li>
);

export default function MainMenu({navMenuState, menuDispatch, webpageRoutes}) {
  const {subRouteView} = navMenuState;

  return (
    <ul className="absolute top-24 right-0">
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
