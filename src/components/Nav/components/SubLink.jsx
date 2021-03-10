import PropTypes from "prop-types";
import LinkRoute from "./LinkRoute";
import LinkButton from "./LinkButton";

function SubLink({sublink, menuDispatch}) {
  return (
    <LinkButton menuDispatch={menuDispatch} styleAttribute="bg-red-100 h-16 w-40">
      <LinkRoute
        linkTitle={sublink.title}
        path={sublink.path}
        query={sublink.tag}
      />
    </LinkButton>
  );
}
export default SubLink;
SubLink.propTypes = {
  sublink: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    path: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,
    attribute: PropTypes.string,
  }).isRequired,
  menuDispatch: PropTypes.func.isRequired,
};
