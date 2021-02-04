import Header from "../general/Header";
import Nav from "../Nav/index";

import Footer from "../general/Footer";
import Head from "next/head";



const Main = ({ children }) => (
  <div className="container px-4  max-w-7xl mx-auto ">
    {children}
  </div>
);

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Root and Blush</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-white font-sans leading-normal tracking-normal">
        <Nav />
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </div>
    </div>
  );
}
