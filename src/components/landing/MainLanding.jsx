import Layout from "../general/Layout";
import ProfileImage from "./ProfileImage";

const Services = () => (
  <div className="w-1/3 bg-red-200">
    <h2>Ready to take a step in Clean living</h2>
    <ul>
      <li>COMPLIMENTARY TOXIN-FREE BEAUTY CONSULTATION</li>
      <li>HOST A VIRTUAL EVENT WITH ME</li>
      <li>OIN THE TOXIN-FREE LIVING FACEBOOK GROU</li>
      <li>GET ACCESS TO THE TOXIN-FREE MASTERLIST</li>
    </ul>
    <button type="button"> Sign UP</button>
  </div>
);

export default function MainLanding() {
  return (
    <Layout>
      <div className="flex ">
        <div className="w-1/3">
          <ProfileImage />
        </div>
        <Services />
        <div className="bg-blue-300 w-1/3">
          <h1>Opportunities</h1>
        </div>
      </div>
    </Layout>
  );
}
