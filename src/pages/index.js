/* eslint-disable react/jsx-filename-extension */
import {getLatestPostForHome} from "../lib/api";

import MainLanding from "../components/landing/MainLanding";


function Home(props) {
  return (
    <div>
      <MainLanding />


    </div>
  );
}

export async function getStaticProps({preview = false}) {
  const latestPost = await getLatestPostForHome(preview);
  return {
    props: {latestPost, preview},
    revalidate: 1,
  };
}

export default Home;
