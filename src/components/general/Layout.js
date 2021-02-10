import Header from "../general/Header";
import Nav from "../Nav/index";

import Footer from "../general/Footer";
import Head from "next/head";

import { useRouter } from "next/router";

import PageTitle from "../general/PageTitle";



const Main = ({ children }) => (
  <div className="container md:px-4  max-w-7xl mx-auto min-h-screen">
    {children}
  </div>
);

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Root and Blush</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white font-sans leading-normal tracking-normal 2xl:mx-20">
        <Nav />
        <Header />
        <Main>
          <PageTitle routerPathName={router.pathname} />
          {children}
        </Main>
        <Footer />
      </div>
    </div>
  );
}
