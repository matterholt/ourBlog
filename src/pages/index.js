import MainLanding from "../components/landing/MainLanding"
import { getLatestPostForHome } from "../lib/api";

function Home(props) {
 
  return (
    <div>
      
      <MainLanding post={props.latestPost} />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const latestPost = await getLatestPostForHome(preview);
  return {
    props: { latestPost, preview },
    revalidate: 1,
  };
}

export default Home
