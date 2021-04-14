import Layout from "../general/Layout";
import ProfileImage from "./ProfileImage";
import CallToAction from "./CallToAction";

const Services = () => (
  <div className="p-10 my-10 flex flex-col justify-between text-xl">
    <ul className="">
      <li>COMPLIMENTARY TOXIN-FREE BEAUTY CONSULTATION</li>
      <li>HOST A VIRTUAL EVENT WITH ME</li>
      <li>JOIN THE TOXIN-FREE LIVING FACEBOOK GROUP</li>
      <li>GET ACCESS TO THE TOXIN-FREE MASTER-LIST</li>
    </ul>
    <CallToAction />
  </div>
);

export default function MainLanding() {
  return (
    <Layout>
      <div className="flex justify-between w-screen relative ">
        <div className="w-1/3">
          <ProfileImage />
        </div>

        <Services />
        <div className="container flex flex-col justify-center self-center h-full text-xl  w-1/4">
          <p>need content from client</p>
        </div>
      </div>
    </Layout>
  );
}
