import Header from "../general/Header"
import Nav from "../general/Nav"
import Subscribe from "../general/Subscribe"
import Author from "../general/Author"
import Footer from "../general/Footer"


import LeadCardContainer from "../heroArticle/LeadCardContainer"
import Posts from "../articles/Posts"





const Main = ({ children }) => (
  <main className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
    {children}
  </main>
);


export default function BlogPage  () {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <Header />
      <Main>
        <Nav />
        <LeadCardContainer />
        <Posts />
        <Subscribe />
        <Author />
      </Main>
      <Footer />
    </div>
  );
}
