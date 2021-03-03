import SubMenu from "./SubMenu.jsx";
import LinkRoute from "./LinkRoute";

const WebSiteLink = ({link, menuDispatch, subRouteView}) => (
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

export default function SiteLinks({navMenuState, menuDispatch, webpageRoutes}) {
  const {isMobileMenuOpen, subRouteView} = navMenuState;

  if (isMobileMenuOpen) {
    return (
      <ul style={{position: "absolute", top: 35}}>
        {webpageRoutes.map((link) => (
          <WebSiteLink
            key={link.id}
            link={link}
            subRouteView={subRouteView}
            menuDispatch={menuDispatch}
          />
        ))}
      </ul>
    );
  }
  return null;
}
