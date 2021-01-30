import LinkRoutes from "./LinkRoutes"

export default function Nav({ children }) {
  return (
    <nav className="mt-0 w-full flex">
      <div className="container mx-auto items-center">
        <LinkRoutes />
      </div>
    </nav>
  );}


