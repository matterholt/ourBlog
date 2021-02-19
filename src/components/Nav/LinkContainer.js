import Link from 'next/link'
 import { useRouter } from "next/router";

import ArrowDown from "../svg/ArrowDown"
 
import {blogRoutes} from "../../routes/index"

const RouteElem = ({ path, name }) => {
  const router = useRouter();

  // need to update not working but 
      const style = {
        backgroundColor:
          router.pathname === path
            ? "2px solid #ffffff6b"
            : "none",
      };
return (
  <Link href={path}>
    <a
      style={style}
      className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4"
    >
      {name}
    </a>
  </Link>
  );
};

const SubMenuLinkView = ({subRoutes, subRouteView, setSubRouteView}) => {
  if (subRouteView === subRoutes) {
    return (
      <div className="relative flex">
        <button onClick={() => setSubRouteView("close")}>
          <ArrowDown transform="rotate(180)" />
        </button>
        <div className="absolute top-10 bg-red-100 ">
          {JSON.stringify(subRoutes)}
          {/* {subRoutes.map((link) => {
            <p>link.tag.toUpperCase();</p>;
          }
          )
          } */}
        </div>
      </div>
    );;
  } else {
    return <button onClick={() => setSubRouteView(subRoutes)}><ArrowDown/></button>;
  }
};

<i class="fi-rr-angle-down"></i>;
export default function LinkContainer({
  webpageRoutes,
  styleAttribute,
  subRouteView,
  setSubRouteView,
}) {
  return (
    <ul className={`list-reset flex justify-between text-sm ${styleAttribute}`}>
      {webpageRoutes.map((link) => (
        <li className="mr-2 flex" key={link.id}>
          {link.subRoutes ? (
            <SubMenuLinkView
              setSubRouteView={setSubRouteView}
              subRouteView={subRouteView}
              subRoutes={link.subRoutes}
            />
          
          ) : null}

          <RouteElem
            path={link.path}
            linkType={link.attribute}
            name={link.name.toUpperCase()}
          />
        </li>
      ))}
    </ul>
  );
};
