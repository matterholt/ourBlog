import Image from 'next/image'

export default function HeroImage({ children }) {
  return (
    <div className="overflow-hidden"style={{ height: "60vh", maxHeight: "460px" }}>
      <Image
        src="/mainImg/flowersYellow.jpg"
        alt="water color multiple flower"
        layout="responsive"
        width={700}
        height={460}
      />
      {children}
    </div>
  );
} 