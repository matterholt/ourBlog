import PropTypes from "prop-types";
import LinkRoute from "./LinkRoute";
import LinkButton from "./LinkButton";

function SubLink({link, menuDispatch}) {
  return (
    <LinkButton
      menuDispatch={menuDispatch}
      styleAttribute="bg-red-100 h-16 w-40"
    >
      <LinkRoute linkTitle={link.title} path={link.path} query={link.tag} />
    </LinkButton>
  );
}
export default SubLink;
SubLink.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    path: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,
    attribute: PropTypes.string,
  }).isRequired,
  menuDispatch: PropTypes.func.isRequired,
};
