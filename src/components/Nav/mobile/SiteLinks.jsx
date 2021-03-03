
import SubMenu from "./SubMenu.jsx";
import LinkRoute from "./LinkRoute";

const WebSiteLink = ({link, menuDispatch, subRouteView}) => (
  <li>
    <LinkRoute
      name={link.title.toUpperCase()}
      path={link.path}
      menuDispatch={menuDispatch}
      styleAttribute="p-4"
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
      <ul className="absolute -right-2 top-20 bg_custom-dark flex flex-col items-end">
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
