import LinkRoute from "./LinkRoute";
import LinkButton from "./LinkButton";

import SubMenu from "./SubMenu";

const MenuItem = ({link, menuDispatch, subRouteView}) => (
  <li style={{ display: "flex", width: 150 }}>
    
    
    <LinkButton menuDispatch={menuDispatch}>
      <LinkRoute
        linkTitle={link.title.toUpperCase()}
        path={link.path}
      />
    </LinkButton>


    {link.subRoutes ? (
      <SubMenu
        menuDispatch={menuDispatch}
        subroutes={link.subRoutes}
        subRouteView={subRouteView}
      />
    ) : null}
  </li>
);

export default function MainMenu({cssStyleAttribute,navMenuState, menuDispatch, webpageRoutes}) {
  const {subRouteView} = navMenuState;

  return (
    <ul className={cssStyleAttribute}>
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
