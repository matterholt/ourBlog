import Link from 'next/link'
 import { useRouter } from "next/router";


const RouteElem = ({ path, name }) => {
  const router = useRouter();
      const style = {
        marginRight: 10,
        borderBottom:
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
);};


export default function LinkContainer({ webpageRoutes, styleAttribute }) {
  return (
    <ul className={`list-reset flex justify-between text-sm ${styleAttribute}`}>
      {webpageRoutes.map((link) => (
        <li className="mr-2" key={link.id}>
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
