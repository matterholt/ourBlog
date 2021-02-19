import Link from 'next/link'
import ArrowSVG from "../svg/ArrowDown";
 

const LinkPath = ({ path, name, setSubRouteView }) => {
  return (
    <Link
      href={{
        pathname: path,
      }}
    >
      <a
        onClick={() => setSubRouteView("close")}
        className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4"
      >
        {name}
      </a>
    </Link>
  );
};

const LinkWithQuery = ({ link, setSubRouteView }) => {
  const { tag, path } = link;
  return (
    <Link
      href={{
        pathname: path,
        query: { tag },
      }}
    >
      <a
        onClick={() => setSubRouteView("close")}
        className="hover:underline inline-block py-2 px-4 no-underline py-2 px-4"
      >
        {tag}
      </a>
    </Link>
  );
};

const SubMenuLinkView = ({subRoutes, subRouteView, setSubRouteView}) => {
  if (subRouteView === subRoutes) {
    return (
      <div className="relative flex">
        <button onClick={() => setSubRouteView("close")}>
          <ArrowSVG transform="rotate(180)" />
        </button>
        <div
          style={{ backgroundColor: "#E3B8A7" }}
          className="absolute top-10 flex flex-col"
        >
          {subRoutes.map((sublink) => (
            <LinkWithQuery
              key={sublink.id}
              link={sublink}
              setSubRouteView={setSubRouteView}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <button onClick={() => setSubRouteView(subRoutes)}><ArrowSVG/></button>;
  }
};


export default function LinkContainer({
  webpageRoutes=[],
  styleAttribute,
  subRouteView,
  setSubRouteView,
}) {

  return (
    <ul className={`list-reset flex items-center justify-evenly text-sm ${styleAttribute}`}>
      {webpageRoutes.map((link) => (
        <li className="mr-2 flex" key={link.id}>
          {link.subRoutes ? (
            <SubMenuLinkView
              setSubRouteView={setSubRouteView}
              subRouteView={subRouteView}
              subRoutes={link.subRoutes}
            />
          ) : null}

          <LinkPath
            setSubRouteView={setSubRouteView}
            path={link.path}
            name={link.name.toUpperCase()}
          />
        </li>
      ))}
    </ul>
  );
};
