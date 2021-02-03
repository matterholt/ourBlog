import Header from "../general/Header";
import Nav from "../Nav/index";
import Subscribe from "../general/Subscribe";
import Author from "../general/Author";
import Footer from "../general/Footer";

import HeroImage from "./HeroImage"


const Main = ({ children }) => (
  <div className="container px-4  max-w-7xl mx-auto ">
    {children}
  </div>
);

export default function Layout({ children }) {
  return (
    <div className="bg-white font-sans leading-normal tracking-normal">
      <Nav />
      <Header />
      <Main>
        {children}
        {/* <Subscribe />
        <Author /> */}
      </Main>
      <Footer />
    </div>
  );
}
