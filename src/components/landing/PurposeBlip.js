import Image from "next/image"

export default function PurposeBlip() {
    return (
      <div className="container flex justify-center my-20 w-auto h-96">
        <div className="w-1/4 ">
          <h2 className="mb-10 p-0 self-center text-center h-16 font-bold text-3xl">
            What I'm about
          </h2>
          <ul>
            <li>᪥ Realistic Clean Living Tips</li>
            <li>᪥ Clean Beauty</li>
            <li>᪥ probably drinking coffee</li>
            <li>᪥ Mama to a cancer survivor</li>
            <li>᪥ Illustrator @joyfulflourish</li>
            <li>᪥ Homeschooling</li>
          </ul>
        </div>
        <div className="w-1/4 h-1/4">
          <Image
            src={"/mainImg/profilePic.png"}
            layout="responsive"
            width={400}
            height={500}
          />
        </div>
      </div>
    );
};
