import Image from 'next/image'

export default function HeroImage({ children }) {
  return (
    <Image
      src="/mainImg/waterColorFlower.jpg"
      alt="water color multiple flower"
      layout="responsive"
      width={1050}
      height={630}
    />
  );
}
