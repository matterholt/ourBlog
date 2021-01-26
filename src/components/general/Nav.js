import LinkRoutes from "./LinkRoutes"
import SocialLinks from "./SocialLinks";
export default function Nav({ children }) {
  return (
    <nav className="mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <LinkRoutes />
        <SocialLinks/>
      </div>
    </nav>
  );}


