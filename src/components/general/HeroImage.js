import Image from 'next/image'

export default function HeroImage({ children }) {
  return (
    <Image
      src="/mainImg/flowersYellow.jpg"
      alt="water color multiple flower"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  );
}
