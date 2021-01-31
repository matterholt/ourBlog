import LinkRoutes from "./LinkRoutes"
import SocialLinks from "./SocialLinks";

export default function Nav({ children }) {
  return (
    <nav className="container w-full flex justify-between">
        <LinkRoutes />
        <SocialLinks />
    </nav>
  );}


