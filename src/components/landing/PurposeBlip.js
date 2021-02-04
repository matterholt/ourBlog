import Image from "next/image"

export default function PurposeBlip() {
    return (
      <div className="container  m-1 w-auto h-96">
        <div className="w-1/4 h-1/4">
          <Image
            src={"/mainImg/profilePic.png"}
            layout="responsive"
            width={400}
            height={500}
          />
        </div>
        <div className="flex justify-center">
          <h2 className="m-0 p-0 self-center">
            This is what I'm about and what i do.
          </h2>
        </div>
      </div>
    );
};
