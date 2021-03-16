import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="">
      <Image
        src="/mainImg/profilePic.png"
        layout="responsive"
        width={400}
        height={500}
      />
    </div>
  );
}
