import { webpageRoutes } from "../../routes/index";

export default function PageTitle({ routerPathName }) {

  const pageRouteData = webpageRoutes.find(
    (routeData) => routeData.path === routerPathName
  );


  return <h2>{pageRouteData ? pageRouteData.name : null}</h2>;
}
