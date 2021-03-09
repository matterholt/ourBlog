import {webpageRoutes} from "../../webpageRoutes";

const { routes } = webpageRoutes;

export default function PageTitle({ routerPathName }) {
  const pageRouteData = routes.find(
    (routeData) => routeData.path === routerPathName
  );

  return <h2>{pageRouteData ? pageRouteData.name : null}</h2>;
}
